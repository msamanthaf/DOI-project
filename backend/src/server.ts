import express from 'express';
import batchRoutes from './routes/batchRoutes';
import matchRoutes from './routes/matchRoutes';
import applicationRoutes from './routes/applicationRoutes';
const app = express();

app.use(express.json());
app.use('/api', batchRoutes);
app.use('/api', matchRoutes);
app.use('/api', applicationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
