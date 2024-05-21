document.getElementById('run').addEventListener('click', async () => {
    const language = document.getElementById('language').value;
    const code = document.getElementById('code').value;

    const response = await fetch('/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ language, code })
    });

    const data = await response.json();
    document.getElementById('output').innerText = data.output || data.error;
});
