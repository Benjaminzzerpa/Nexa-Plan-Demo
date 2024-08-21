
anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
        [2023, 453, 332, 293, 198],
        [2024, 439, 325, 194, 238, 1189],
        [2025, 448, 281, 181, 269, 1146],
        [2026, 397, 316, 214, 281, 1142],
        [2027, 424, 366, 213, 302, 1227],
        [2028, 419, 275, 214, 287, 1230],
        [2029, 360, 257, 214, 287, 1159],
        [2030, 298, 269, 213, 372, 1066],
        [2031, 293, 289, 215, 368, 1085],
        [2032, 242, 328, 217, 380, 1001],
        [2033, 0, 320, 219, 376, 814]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
    // map data for the fifth series, take x from the zero column and value from the fifth column of data set
    var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });

    var chart = anychart.line();

    // set title
    chart.title('Revenue (USD M)');
    // set stack mode
    chart.yScale().stackMode('value');

    // create column series
    chart.column().name('Cerro Lindo').data(firstSeriesData).color('#808080');

    // create column series
    chart.column().name('Pasco Complex').data(secondSeriesData).color('#3C3C3C');

    // create column series
    chart.column().name('Vazante + MA').data(thirdSeriesData).color('#C0C0C0');

    // create column series
    chart.column().name('Ariapuanã').data(fourthSeriesData).color('#FF5000');

    // create line series
    chart.line().name('Off-Site').data(fifthSeriesData).color('#000000');

    var minValue = chart.getStat('yScalesMin');
    var maxValue = chart.getStat('yScalesMax');
    var yScales = chart.getYScales();

    // set minimum and maximum y-scale
    for (var i = 0; i < yScales.length; i++) {
        var yScale = yScales[i];
        yScale.minimum(minValue);
        yScale.maximum(maxValue);
    }
    chart.legend(true);


    // set container id for the chart
    chart.container('revenue');
    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
        [2023, 69, 31, 123, -63],
        [2024, 34, 50, 29, 124, 163],
        [2025, 59, 39, 130, -51, 116],
        [2026, 54, 57, 13, 95, 129],
        [2027, 83, 58, 104, 130, 292],
        [2028, 51, 75, 69, 117, 324],
        [2029, 62, 76, 63, 97, 332],
        [2030, 126, 71, 71, 68, 270],
        [2031, 125, 75, 91, 78, 274],
        [2032, 131, 85, 122, 49, 333],
        [2033, 141, 89, 116, 0, 274]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
    // map data for the fifth series, take x from the zero column and value from the fifth column of data set
    var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });

    var chart = anychart.line();

    // set title
    chart.title('OCF (USD M)');
    // set stack mode
    chart.yScale().stackMode('value');

    // create column series
    chart.column().name('Cerro Lindo').data(firstSeriesData).color('#808080');

    // create column series
    chart.column().name('Pasco Complex').data(secondSeriesData).color('#3C3C3C');

    // create column series
    chart.column().name('Vazante + MA').data(thirdSeriesData).color('#C0C0C0');

    // create column series
    chart.column().name('Ariapuanã').data(fourthSeriesData).color('#FF5000');

    // create line series
    chart.line().name('Off-Site').data(fifthSeriesData).color('#000000');

    var minValue = chart.getStat('yScalesMin');
    var maxValue = chart.getStat('yScalesMax');
    var yScales = chart.getYScales();

    // set minimum and maximum y-scale
    for (var i = 0; i < yScales.length; i++) {
        var yScale = yScales[i];
        yScale.minimum(minValue);
        yScale.maximum(maxValue);
    }
    chart.legend(true);


    // set container id for the chart
    chart.container('ocf');
    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
        [2023, 2, 111, 102, 164],
        [2024, 69, 84, 144, 168, 393],
        [2025, 106, 70, 68, 167, 364],
        [2026, 107, 97, 127, 130, 378],
        [2027, 121, 97, 169, 163, 385],
        [2028, 98, 100, 115, 166, 492],
        [2029, 105, 99, 103, 124, 452],
        [2030, 162, 99, 120, 91, 399],
        [2031, 152, 99, 131, 90, 394],
        [2032, 168, 102, 168, 60, 426],
        [2033, 163, 104, 160, 0, 343]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
    // map data for the fifth series, take x from the zero column and value from the fifth column of data set
    var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });

    var chart = anychart.line();

    // set title
    chart.title('Ebitda (USD M)');
    // set stack mode
    chart.yScale().stackMode('value');

    // create column series
    chart.column().name('Cerro Lindo').data(firstSeriesData).color('#808080');

    // create column series
    chart.column().name('Pasco Complex').data(secondSeriesData).color('#3C3C3C');

    // create column series
    chart.column().name('Vazante + MA').data(thirdSeriesData).color('#C0C0C0');

    // create column series
    chart.column().name('Ariapuanã').data(fourthSeriesData).color('#FF5000');

    // create line series
    chart.line().name('Off-Site').data(fifthSeriesData).color('#000000');

    var minValue = chart.getStat('yScalesMin');
    var maxValue = chart.getStat('yScalesMax');
    var yScales = chart.getYScales();

    // set minimum and maximum y-scale
    for (var i = 0; i < yScales.length; i++) {
        var yScale = yScales[i];
        yScale.minimum(minValue);
        yScale.maximum(maxValue);
    }
    chart.legend(true);


    // set container id for the chart
    chart.container('ebitda');
    // initiate chart drawing
    chart.draw();
});


anychart.onDocumentReady(function () {
    // create data set
    var dataSet = anychart.data.set([
        ['2023', 13.4, 13.4, 13.5],
        ['2024', 12.9, 13.5, 13.3],
        ['2025', 13.2, 13, 8, 13.7],
        ['2026', 12.9, 13.6, 13.1],
        ['2027', 11.7, 13.8, 12.5],
        ['2028', 9.4, 12.7, 12.6],
        ['2029', 9.2, 12.8, 12.2],
        ['2030', 9.1, 12.7, 12.2],
        ['2031', 9.1, 12.3, 12.2],
        ['2032', 4.1, 12.2, 10.6],
        ['2033', 4.1, 11.6, 7.2],
        ['2034', 4.1, 7.3, 7.2],
        ['2035', 3.3, 7.3, 7.2],
        ['2036', 3.1, 7.5, 7.2],
        ['2037', 2.3, 7.2, 7.2],
        ['2038', 2.4, 7.3, 7.2],
        ['2039', 2.4, 7, 7.2],
        ['2040', 2.3, 5.7, 7.2],
        ['2041', 3.4, 5.5, 5.4],
        ['2042', 1.1, 5.6, 4.1],
        ['2043', 0.8, 3.6, 4.2],
        ['2044', 0.7, 0.7, 4.2],
        ['2045', 0, 0, 4.1],
        ['2046', 0, 0, 3.1],
        ['2047', 0, 0, 2.8]
    ]);

    // map data for the first series, take x from the zero area and value from the first area of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero area and value from the second area of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the second series, take x from the zero area and value from the third area of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    // map data for the fourth series, take x from the zero area and value from the fourth area of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

    // map data for the fifth series, take x from the zero area and value from the fourth area of data set
    var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });

    // create bar chart
    var chart = anychart.area();

    // turn on chart animation
    chart.animation(true);

    // turn on the crosshair
    var crosshair = chart.crosshair();
    crosshair.enabled(true).yStroke(null).xStroke('#fff').zIndex(39);
    crosshair.yLabel().enabled(false);

    // force chart to stack values by Y scale.
    chart.yScale().stackMode('value');

    // set chart title text settings
    chart.title('Treated Ore (Mt)');

    // Cores para cada série
    var seriesColors = {
        'Aripuanã': '#FF5000',
        'PE': '#3C3C3C',
        'Off-Site': '#C0C0C0'
    };


    // helper function to setup label settings for all series
    var setupSeriesLabels = function (series, name) {
        series
            .name(name)
            .stroke('3 #fff 1')
            .fill(seriesColors[name]); // Usando a cor correspondente à série
        series.hovered().stroke('3 #fff 1');
        series
            .hovered()
            .markers()
            .enabled(true)
            .type('circle')
            .size(4)
            .stroke(false);
        series.markers().zIndex(100);
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.area(firstSeriesData);
    setupSeriesLabels(series, 'Aripuanã');


    // create second series with mapped data
    series = chart.area(secondSeriesData);
    setupSeriesLabels(series, 'PE');


    // create third series with mapped data
    series = chart.area(thirdSeriesData);
    setupSeriesLabels(series, 'Off-Site');


    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // set titles for axises
    chart.xAxis().title(false);
    // interactivity and tooltip settings
    chart.interactivity().hoverMode('by-x');
    chart
        .tooltip()
        .valuePostfix(' (Mt)')
        .displayMode('union');

    // set container id for the chart
    chart.container('treated_ore');

    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create column chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);

    // set chart title text settings
    chart.title('FCFF');

    // create area series with passed data
    var series = chart.column([
        ['2019', -27],
        ['2020', 52],
        ['2021', 307],
        ['2022', -5],
        ['2023', 92],
        ['2024', 179],
        ['2025', 153],
        ['2026', 240],
    ]);

    // set series tooltip settings
    series.tooltip().titleFormat('{%X}');

    series
        .tooltip()
        .position('center-top')
        .anchor('center-bottom')
        .offsetX(0)
        .offsetY(5)
        .format('USD M{%Value}{groupsSeparator: }');

    series.color('#FF5000');
    // set yAxis labels formatter
    chart.yAxis().labels().format('{%Value}{groupsSeparator: } (UDS M)');

    // tooltips position and interactivity settings
    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    // set container id for the chart
    chart.container('fcff');

    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create column chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);

    // set chart title text settings
    chart.title('Capex');

    // create area series with passed data
    var series = chart.column([
        ['2019', 446],
        ['2020', 300],
        ['2021', 300],
        ['2022', 380],
        ['2023', 312],
        ['2024', 328],
        ['2025', 353],
        ['2026', 371],
    ]);

    // set series tooltip settings
    series.tooltip().titleFormat('{%X}');

    series
        .tooltip()
        .position('center-top')
        .anchor('center-bottom')
        .offsetX(0)
        .offsetY(5)
        .format('USD M{%Value}{groupsSeparator: }');

    series.color('#C0C0C0');
    // set yAxis labels formatter
    chart.yAxis().labels().format('{%Value}{groupsSeparator: } (UDS M)');

    // tooltips position and interactivity settings
    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    // set container id for the chart
    chart.container('capex');

    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
        ['2023', 78, 64, 22, 169, 333],
        ['2024', 83, 66, 60, 146, 360],
        ['2025', 86, 72, 78, 143, 352],
        ['2026', 96, 66, 79, 144, 372],
        ['2027', 100, 95, 78, 144, 389],
        ['2028', 80, 96, 82, 146, 395],
        ['2029', 64, 95, 82, 146, 391],
        ['2030', 66, 95, 104, 145, 391],
        ['2031', 72, 98, 101, 145, 384],
        ['2032', 61, 111, 99, 145, 363],
        ['2033', 0, 99, 98, 145, 339],
        ['2034', 0, 101, 86, 145, 315],
        ['2035', 0, 95, 92, 145, 310],
        ['2036', 0, 93, 94, 125, 285],
        ['2037', 0, 93, 104, 127, 281],
        ['2038', 0, 111, 104, 114, 296],
        ['2039', 0, 99, 108, 126, 302],
        ['2040', 0, 0, 90, 107, 315],
        ['2041', 0, 0, 107, 112, 172],
        ['2042', 0, 0, 108, 109, 138],
        ['2043', 0, 0, 77, 103, 141],
        ['2044', 0, 0, 0, 28, 139],
        ['2045', 0, 0, 0, 0, 138],
        ['2046', 0, 0, 0, 0, 94],
        ['2047', 0, 0, 0, 0, 94]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });
    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });
    // map data for the fifth series, take x from the zero column and value from the fifth column of data set
    var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });

    var chart = anychart.line();

    // set title
    chart.title('Zn Prodcution (Kt)');
    // set stack mode
    chart.yScale().stackMode('value');

    // create column series
    chart.column().name('Cerro Lindo').data(firstSeriesData).color('#808080');

    // create column series
    chart.column().name('Pasco Complex').data(secondSeriesData).color('#3C3C3C');

    // create column series
    chart.column().name('Vazante + MA').data(thirdSeriesData).color('#C0C0C0');

    // create column series
    chart.column().name('Ariapuanã').data(fourthSeriesData).color('#FF5000');

    // create line series
    chart.line().name('Off-Site').data(fifthSeriesData).color('#000000');

    var minValue = chart.getStat('yScalesMin');
    var maxValue = chart.getStat('yScalesMax');
    var yScales = chart.getYScales();

    // set minimum and maximum y-scale
    for (var i = 0; i < yScales.length; i++) {
        var yScale = yScales[i];
        yScale.minimum(minValue);
        yScale.maximum(maxValue);
    }
    chart.legend(true);


    // set container id for the chart
    chart.container('zn_production');
    // initiate chart drawing
    chart.draw();
});

anychart.onDocumentReady(function () {
    // create column chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);

    // set chart title text settings
    chart.title('Quality of concentrate Zn');

    // create area series with passed data
    var series = chart.column([
        ['2023', 54],
        ['2024', 43.3],
        ['2025', 43.7],
        ['2026', 49.1],
        ['2027', 54.5],
        ['2028', 54.6],
        ['2029', 50.2],
        ['2030', 47.2],
        ['2031', 49.2],
        ['2032', 48.6],
        ['2033', 50.2],
        ['2034', 43.2],
        ['2035', 43.2],
        ['2036', 49.2],
        ['2037', 54.2],
        ['2038', 54.2],
        ['2039', 50.2],
        ['2040', 47.2],
        ['2041', 49.4],
        ['2042', 48.1],
        ['2043', 50.2],
        ['2044', 43.2],
        ['2045', 43.1],
        ['2046', 49.1],
        ['2047', 54.8]
    ]);
    series.fill('#C0C0C0');
    series.stroke('none');

    // set series tooltip settings
    series.tooltip().titleFormat('{%X}');

    series
        .tooltip()
        .position('center-top')
        .anchor('center-bottom')
        .offsetX(0)
        .offsetY(5)
        .format('%{%Value}{groupsSeparator: }');

    // set scale minimum
    chart.yScale().minimum(0);

    // set yAxis labels formatter
    chart.yAxis().labels().format('%{%Value}{groupsSeparator: }');

    // tooltips position and interactivity settings
    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');

    // set container id for the chart
    chart.container('quality_zn');

    // initiate chart drawing
    chart.draw();
});