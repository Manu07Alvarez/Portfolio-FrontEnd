const fs = require('fs');
const HtmlToJson = require('html-to-json');

HtmlToJson.parse(fs.readFileSync('./src/app/app.component.html', 'utf8'), {
    'title': function ($doc) {
        return $doc.find('title').text();
    },
    'meta': ['meta', function ($meta) {
        return {
            'name': $meta.attr('name'),
            'content': $meta.attr('content')
        }
    }],
    'link': ['link', function ($link) {
        return {
            'rel': $link.attr('rel'),
            'href': $link.attr('href')
        }
    }],
    'script': ['script', function ($script) {
        return {
            'src': $script.attr('src'),
            'type': $script.attr('type')
        }
    }]
}).done((data) => {
    fs.writeFileSync('./src/assets/data/data.json', JSON.stringify(data));
    console.log('Archivo JSON generado exitosamente.');
});
