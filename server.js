const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/v1/band/calls', (req, res) => {
    console.log('📦 Received ESP32 request:', req.body);
    res.json({
        status: 'success',
        message: 'Request received from ESP32!',
        device: req.body.device || 'unknown',
        timestamp: new Date().toISOString(),
        server: 'Railway ESP32 Server'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', server: 'Railway' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
