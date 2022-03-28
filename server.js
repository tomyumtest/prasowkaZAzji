const express = require('express');
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// ten kod odsyłła wszystko do strony głównej index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 9098, () => console.log('Server is running...'));