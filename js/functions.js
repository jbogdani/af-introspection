const colors = [
    "rgba(88,153,218,.8)",
    "rgba(232,116,59,.8)",
    "rgba(83,170,122,.8)",
    "rgba(233,73,122,.8)",
    "rgba(148,94,207,.8)",
    "rgba(74,165,180,.8)",
    "rgba(82,95,244,.8)",
    "rgba(192,66,158,.8)",
    "rgba(108,136,147,.8)",
    "rgba(235,103,104,.8)",
    "rgba(47,100,151,.8)",

    "rgba(88,153,218,.8)",
    "rgba(232,116,59,.8)",
    "rgba(83,170,122,.8)",
    "rgba(233,73,122,.8)",
    "rgba(148,94,207,.8)",
    "rgba(74,165,180,.8)",
    "rgba(82,95,244,.8)",
    "rgba(192,66,158,.8)",
    "rgba(108,136,147,.8)",
    "rgba(235,103,104,.8)",
    "rgba(47,100,151,.8)"

];

const makeChart = (type, labels, data, colors) => {
    // let csv = ''; labels.forEach( (l, i) => { csv += `${l}\t${data[i]}\n`; }); console.log(csv);
    const html = `<canvas data-chart="${type}">
    <!--
    {
     "data": {
      "labels": ["${labels.join('", "')}"],
      "legend": {
          "display": false
      },
      "datasets": [
       {
        "data":[${data.join(", ")}],
        "label": "Dataset 1",
        "backgroundColor":[
            "${colors.join('", "')}"
        ]
       }
      ]
     },
     "options": { "responsive": "true" }
    }
    -->
    </canvas>`;

    return document.write(html);
};

const makeTable = (labels, rows) => {
    const html = `<table class="reveal" style="font-size: 1.5rem;">
            <thead>
                <tr>
                    <th>${labels.join('</th><th>')}</th>
                </tr>
            </thead>
            <tbody>
                ${rows.join('')}
            </tbody>
        </table>`;
    return document.write(html);

};

const countGisTable = (index) => {
    const mult = 5;
    makeTable(
        ['', 'Conference year', 'Project name', 'Still available', 'Access'],
        webgis.slice(index*mult-mult, index*mult).map((e,i) => {
            return `<tr>
                <td>${(index*mult - mult + i+1)}</td>
                <td>${e.year}</td>
                <td>${e.name}${e.url ? `<br><a href="${e.url}" target="_blank">${e.url}</a>` :  ''}</td>
                <td>${e.available ? '\u2714' : '\u2716'}</td>
                <td>${e.access ? e.access : '\u2716'}</td>
            </tr>`
        })
    );
};

const publicationsTable = () => {
    makeTable(
        ['', 'Conference year', 'Publication', 'License'],
        publications.map((e,i) => {
            return `<tr>
                <td>${(i+1)}</td>
                <td>${e.year}</td>
                <td>${e.pubs ? e.pubs : '-'}</td>
                <td>${e.license ? e.license : '-'}</td>
            </tr>`
        })
    );
};
const publicationsChart = () => {
    let conf_years = [];
    let publ_years = [];
    publications.forEach( p => {
        const pub_y = p.year_published ? p.year_published : 2020;
        conf_years.push(`${p.year} - ${p.year_published ? p.year_published : '?'}`);
        publ_years.push(pub_y - p.year);
    });
    makeChart(
        'bar',
        conf_years,
        publ_years,
        colors.slice(0, conf_years.length)
    );
};

const publicationsLicenseChart = () => {
    let license = {};
    publications.forEach(element => {
        if (element.license){
            if(typeof license[element.license] === 'undefined') {
                license[element.license] = 0;
            }
            license[element.license]++;
        } else {
            // if(typeof license['n.d.'] === 'undefined') {
            //     license['n.d.'] = 0;
            // }
            // license['n.d.']++;
        }
    });

    makeChart('pie', Object.keys(license), Object.values(license), colors.slice(0,Object.keys(license).length));
};

const countGisAvailability = () => {
    let not_available = 0;
    let available = 0;
    webgis.forEach(element => {
        if (element.available){
            available++;
        } else {
            not_available++;
        }
    });
    makeChart('pie', ["Portal available", "Portal not available anymore"], [available, not_available], colors.slice(0,2));
}

const countGisAccess = () => {
    let access = {};
    webgis.forEach(element => {
        if (element.access){
            if(typeof access[element.access] === 'undefined') {
                access[element.access] = 0;
            }
            access[element.access]++;
        } else {
            if(typeof access['n.d.'] === 'undefined') {
                access['n.d.'] = 0;
            }
            access['n.d.']++;
        }
    });
    makeChart('pie', Object.keys(access), Object.values(access), colors.slice(0,Object.keys(access).length));
}

const countSourceAvailability = () => {
    let not_available = 0;
    let available = 0;
    applications.forEach(element => {
        if (element.source_available){
            available++;
        } else {
            not_available++;
        }
    });
    makeChart('pie', ["Code available", "Code not available"], [available, not_available], colors.slice(0,2));
}

const sourceAvailableTable = () => {
    makeTable(
        ["", "Project", "Source URL"],
        applications.filter( e => e.source_available ).map( (d, i) => {
            return `<tr><td>${i+1}</td><td>${d.name}</td><td>${d.source_available}</td></tr>`;
        })
    );
}
const sourceNotAvailableTable = (index) => {
    const perpage = 10;
    const not_av = applications.filter( e => {
        return !e.source_available;
    })

    makeTable(
        ["", "Project"],
        not_av.slice(index * perpage - perpage, index * perpage ).map( (d, i) => {
            return `<tr>
                <td>${index * perpage - perpage + i + 1}</td>
                <td>${d.name}</td>
            </tr>`;
        })
    );
}

const licenseType = () => {
    let license = {};
    applications.forEach(element => {
        if (element.license){
            if(typeof license[element.license] === 'undefined') {
                license[element.license] = 0;
            }
            license[element.license]++;
        } else {
            if(typeof license['n.d.'] === 'undefined') {
                license['n.d.'] = 0;
            }
            license['n.d.']++;
        }
    });

    makeChart('pie', Object.keys(license), Object.values(license), colors.slice(0,Object.keys(license).length));
}

const licenseTypeTable = () => {
    makeTable(
        [ 'Project', 'Licese', 'URL' ],
        applications.map( d => {
            if (d.license){
                return `<tr><td>${d.name}</td><td>${d.license}</td><td>${d.source_available ? d.source_available : '-'}</td></tr>`;
            }
        } )
    );
}

const countSurvived = () => {
    let not_maintained = 0;
    let maintained = 0;
    applications.forEach(element => {
        if (element.maintained){
            maintained++;
        } else {
            not_maintained++;
        }
    });
    makeChart('pie', ["Maintained in 2020", "not maintained anymore"], [maintained, not_maintained], colors.slice(0,2));
};

const devIntensity = () => {
    let labels = [];
    let values = [];
    applications.forEach(d => {
        if (d.source_available && d.name !== 'GRASS'){
            labels.push(d.name);
            values.push(d.commits);
        }
    });
    makeChart(
        'bar',
        labels,
        values,
        colors.slice(0, labels.length)
    );
};

const devIntensityTable = () => {
    makeTable(
        ['Application', 'Presented', 'Last commit', 'All commits'],
        applications.map( d => {
            if (d.source_available){
                return `<tr>
                    <td>${d.name}</td>
                    <td>${d.year}</td>
                    <td>${d.last_commit ? d.last_commit : `?`}</td>
                    <td>${d.commits}</td>
                </tr>`;
            }
        })
    );
};

const longevity = () => {
    let labels = [];
    let values = [];
    applications.forEach(d => {
        if (d.last_commit){
            labels.push(d.name);
            values.push(d.last_commit - d.year);
        }
    });
    makeChart(
        'bar',
        labels,
        values,
        colors.slice(0, labels.length)
    );
};

const longevityTable = () => {
    let labels = [];
    let values = [];
    applications.forEach(d => {
        if (d.last_commit){
            labels.push(d.name);
            values.push(d.last_commit - d.year);
        }
    });
    makeTable(
        ['Application', 'Presented', 'Last commit', 'Is maintained'],
        applications.map( d => {
            if (d.last_commit){
                return `<tr>
                    <td>${d.name}</td>
                    <td>${d.year}</td>
                    <td>${d.last_commit}</td>
                    <td>${d.last_commit < 2020 ? '\u2716' : '\u2714' }</td>
                </tr>`;
            }
        })
    );
};
