function scrapeData() {
    const elements = document.querySelectorAll('.event-link.content-link');

    console.log(elements);

    const data = Array.from(elements).map(el => {
        const href = el.href;
        const text = el.innerText.trim();
        return `${text} (${href})`;
    }).join('\n');

    download('event_links.txt', data);
}

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

scrapeData();
