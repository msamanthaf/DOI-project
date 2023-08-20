import numpy as np


class MarriageModel:

    def __init__(self, proposers, receivers):
        # initialize
        self.proposers = proposers
        self.receivers = receivers

    @staticmethod
    def __rejection_exists(PrefLists, mu, recent_proposals):
        # there is no rejection if every proposer is held by a receiver
        if set(PrefLists) == set(mu):
            return False
        # there is no rejection if every proposer is at the end of their list
        elif sum(0 if recent_proposals[p] == PrefLists[p][-1] else 1 for p in set(PrefLists).difference(set(mu))) is 0:
            return False
        # if there is rejection, iterate
        else:
            return True

    @staticmethod
    def sort_matching(mu, keys=None):

        # sort the matches either by receivers or proposers
        if isinstance(mu, dict):
            # separate the singles from the married couples
            # they will be appended at the end of mu
            singles = sorted([(str(k), 'unmatched')
                             for k, v in mu.items() if v is None])
            mu = {k: v for k, v in mu.items() if v is not None}
            if isinstance(keys, str):

                if keys == 'receivers':
                    return_mu = sorted(mu.items(), key=lambda el: el[1])
                elif keys is None or keys == 'proposers':
                    return_mu = sorted(mu.items())
                else:
                    raise ValueError(
                        'Not a valid argument was passed in sort_by.')

            # keys can also accept a dict_keys() or a list
            else:
                # if mu is a dict, compare the keys and sort
                if keys is not None and not set(mu).issubset(keys):
                    return_mu = sorted((v, k) for k, v in mu.items())
                else:
                    return_mu = sorted(mu.items())

        else:
            singles = sorted([(str(k), 'unmatched')
                             for k, v in mu if v is None])
            mu = np.array([(k, v) for k, v in mu if v is not None])
            # if it's a numpy array, then compare the first element of each tuple with the keys and sort
            if keys is not None and set(mu[:, 0]).issubset(keys):
                return_mu = sorted(mu[:, [1, 0]], key=lambda x: x[0])
            else:
                return_mu = sorted(mu, key=lambda x: x[0])

        # append the singles to mu
        return_mu += singles

        return return_mu

    def Deferred_Acceptance(self, **kwargs):
        """
        A method that implements Gale and Shapley's Deferred Acceptance algorithm using the preference profiles 
        (Python dictionaries) passed into class instance initialization, where the first dictionary is the preference 
        profile of the proposing side and the second is that of the proposal receiving side. 
        Both preference profiles must be a Python dictionary where the keys denote the agents and the values denote 
        their preference order. Note that a preference order can only be of type list, int or str. If it is a list, then 
        lower index corresponds to higher preference.


        (Optional) key-word arguments: 
        print_rounds: If True, prints the number of steps it took to reach the final outcome.
        print_tentative_matchings: If True, prints all tentative matchings made after each step.

        Returns a dictionary where: 
        - For married couples: the keys correspond to the proposers and 
                               the values correspond to the receivers
        - For singles: the keys are the names of single people and the values are None
        """

        P_m = self.proposers.copy()
        P_w = self.receivers.copy()

        if P_m is None or P_w is None:
            print(
                'No preferences are passed. Please create the MarriageModel instance with preferences.')
            return None

        # run through the passed dictionaries and see if it satisfies the required format.
        # if str or int is passed for value, change the type to list, if it's a list do nothing
        # and raise an error if any other type of data is passed as a value to a dictionary
        for k, v in P_m.items():
            # convert each proposer's preference list to a Python list if it is a singleton
            if isinstance(v, (str, int)):
                P_m.update({k: [v]})
            # if preference list is a Python list, no problem, continue
            elif isinstance(v, list):
                continue
            # in all other cases, stop the algorithm and raise an error message.
            else:
                raise ValueError(
                    "Proposer {}'s preference list is not a valid list.".format(k))

        # same job for the receivers
        for k, v in P_w.items():
            # convert each receiver's preference list to a Python list if it is a singleton
            if isinstance(v, (str, int)):
                P_w.update({k: [v]})
            # if preference list is a Python list, no problem, continue
            elif isinstance(v, list):
                continue
            # in all other cases, stop the algorithm and raise an error message.
            else:
                raise ValueError(
                    "Receiver {}'s preference list is not a valid list.".format(k))

        # counter for the number of rounds
        itr = 1

        # the first step of the algorithm
        # (i)   every proposer 'proposes' to their first choice; these proposals are collected (in dictionary mu)
        # (ii)  make a list of proposals for each receiver who received a proposal (in dictionary proposals).
        # (iii) each receiver holds onto the best among the received proposals (in dictionary mu_r)
        # (iv)  reverse mu_r so that the keys are the proposers and the values are the receivers (in dictionary mu);
        #       this will require updating the dictionary with the rejected proposers (who don't exist in mu_r)
        # this general framework is repeated in each step until convergence

        # (i)
        mu = {}
        for p, Pref_list in P_m.items():
            # every proposer proposes to their first choice
            pointed = Pref_list[0]
            # if the proposee is not present in the problem, we continue the problem with the next best option
            if pointed not in P_w:
                raise ValueError("Proposer {}'s preference list includes {}, who is not present in this problem."
                                 .format(p, pointed))
            elif isinstance(pointed, list):
                raise TypeError(
                    "Preference lists must be strict. {} in {}'s preference list implies that {} is indifferent between them.".format(pointed, p, p))
            # save each proposal here
            mu.update({p: pointed})

        # most recent proposal for every proposer (this will come in handy in the next step)
        recent_proposals = mu.copy()

        # (ii) make a proposal list for everyone who received a proposal
        proposals = {}
        for p, r in mu.items():
            proposals.setdefault(r, []).append(p)

        # (iii) every receiver keeps the best proposal according to their preferences and reject all others
        mu_r = {r: next((p for p in P_w[r] if p in proposers), None) for (
            r, proposers) in proposals.items()}

        # (iv) reverse the receiver-proposer mapping to fit it into the general framework
        mu = {}
        for r, p in mu_r.items():
            # if a receiver receives proposals only from unacceptable proposers, we leave it as is.
            if p is None:
                mu.update({r: p})
            # otherwise, we reverse the receiver-proposer mapping into a proposer-receiver dictionary
            else:
                mu.update({p: r})

        # iterate while there exist rejections
        rejections_exist = True
        while rejections_exist:

            # if print_tentative_matchings argument is passed, print the tentative matching so far.
            if rejections_exist and kwargs.get('print_tentative_matchings') is True:
                print('Tentative matching after Round {}:'.format(itr))
                print(mu)

            new_proposals = {}
            # iterate over every proposer who is rejected from their most recent proposal
            for p in set(P_m).difference(set(mu)):

                # only consider those who are not at the end of their list
                if recent_proposals[p] != P_m[p][-1]:

                    # (i) each such proposer proposes to their next option on their preference list
                    pointed = P_m[p][P_m[p].index(recent_proposals[p])+1]

                    # if that option is not someone who is present in this problem, raise an error and exit the algorithm
                    if pointed not in P_w:
                        raise ValueError("Proposer {}'s preference list includes {}, who is not present in this problem."
                                         .format(p, pointed))

                    elif isinstance(pointed, list):
                        raise ValueError(
                            "The preference lists must be strict. {} in {}'s preference list implies {} is indifferent between them.".format(pointed, p, p))

                    # add the proposal to the new set of proposals
                    new_proposals.update({p: pointed})

            # update the most recent proposals list with the proposals of those who proposed above
            # (this way we can track where each proposer is on their preference list)
            recent_proposals.update(new_proposals)

            # (ii-a) make a proposal list for everyone who received a new proposal above
            proposals = {}
            for p, r in new_proposals.items():
                proposals.setdefault(r, []).append(p)

            # (ii-b) combine the new and holding proposals for each receiver
            tentative_mu = {}
            for d in (proposals, mu_r):  # we iterate over the past and present proposals
                for r, p in d.items():
                    # if a receiver was holding an offer, extend the list
                    if isinstance(p, list):
                        tentative_mu.setdefault(r, []).extend(p)
                    # if a receiver wasn't holding any offers, open a new list
                    else:
                        tentative_mu.setdefault(r, []).append(p)

            # (iii) every receiver keeps the best proposal according to their preferences and reject all others
            mu_r = {r: next((p for p in P_w[r] if p in proposers), None) for (
                r, proposers) in tentative_mu.items()}

            # (iv) reverse the receiver-proposer mapping to fit it into the general framework
            #      so that we don't lose unmatched receivers when updating mu
            mu = {}
            for r, p in mu_r.items():
                # if a receiver receives proposals only from unacceptable proposers, we leave it as is.
                if p is None:
                    mu.update({r: p})
                # otherwise, we reverse the receiver-proposer mapping into a proposer-receiver dictionary
                else:
                    mu.update({p: r})

            # check if there were any rejections in this round
            rejections_exist = self.__rejection_exists(
                P_m, mu, recent_proposals)

            itr += 1

        # denote the proposers who were left unmatched as being matched to None
        unmatched = {p: None for p in set(P_m).difference(set(mu))}
        mu.update(unmatched)
        # denote the receivers who were left unmatched as being matched to None
        unmatched = {r: None for r in set(P_w).difference(set(mu.values()))}
        mu.update(unmatched)

        # print rounds if print_rounds = True, else don't
        if kwargs.get('print_rounds') is True:
            print('Success. The Gale-Shapley algorithm ran {} rounds.'.format(itr))

        return mu
