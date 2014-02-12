$(document).ready(function()
{

	// Navigate to the parent of the list item i.e. ul
	// and then go to each list element, if the class is active, remove the class.
	function resetClass(selector,c){
	  selector.parent().children().each(function(){
	      if($(this).hasClass('active')){
	        $(this).removeClass('active');
	      }
	     });

	}

$('#list-usePref li').click(function(){
  // Calling reset method to remove active class
  resetClass($(this), 'active');

  // Add active class to the selected list item
  $(this).addClass('active');

  //Store selected list item value in a variable
  var filtervalue = $(this).text();
 

  	//Variable for line chart, containing default initial options
    var option_linechart = {
      chart: {
        renderTo: "line-chart"
      },
      title: {
              text: 'Monthly Average Sales',
              x: -20 //center
              },
      xAxis: {
          categories: [ // fill in months here
          ]
      },
      yAxis: {
          title: {
              text: 'Sales ($)'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valuePrefix: '$'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: []
    }

    //Variable pie line chart, containing default initial options
    var option_piechart = {
      chart: {
        renderTo: "pie-chart",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
     title: {
                text: '% Sale by item'
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
      series: []
    }


    //Variable bar line chart, containing default initial options
    var option_barchart = {
        chart: {
          renderTo: "bar-chart",
          type: 'column'
        },
        title: {
          text: 'Total sale by region'
        },
        xAxis: {
          categories: [
           //fill countries here
          ]
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Sales($)'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: false,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [],
        drilldown: {
        }
      }

     // Initial data variable to store aggregate value read from the input file.
     
     var regions = {};
     var type = {};
     var months = {};

	// ajax call to data from the csv file
  	$.get('_data/sales_new.csv', function (data) {

    // 1. split the csv by line ('#')
    var lines = data.split('#');


    // 2. loop through each line using $.each
    $.each(lines, function(lineNo, line) {
          
      // 3. turn each line into an array that contains 4 items: name, grade #1, grade #2, grade #3; use the .split() method
      var items = line.split(',');


      // 4. skip the first line (since it's the header)
      if (!(lineNo == 0) && (items[1]== filtervalue || filtervalue == "All")) {

      	 // 4a .Check if month is available in object 'months'
      	 //if yes, then add sales to existing value
      	 //else insert new data for the month encountered
         if ( items[0] in months ) 
         {
          months[items[0]] = parseInt(months[items[0]]) + parseInt(items[3]);
         }
         else
         {
            months[items[0]] = parseInt(items[3]);
         }


         // 4b .Check if month is available in object 'months'
      	 //if yes, then add sales to existing value
      	 //else insert new data for the month encountered
         if ( items[1] in regions ) 
         {
          regions[items[1]] = parseInt(regions[items[1]]) + parseInt(items[3]);
         }
         else
         {
            regions[items[1]] = parseInt(items[3]);
         }

         // 4c .Check if month is available in object 'months'
      	 //if yes, then add sales to existing value
      	 //else insert new data for the month encountered
         if ( items[2] in type ) 
         {
          type[items[2]] = parseInt(type[items[2]]) + parseInt(items[3]);
         }
         else
         {
            type[items[2]] = parseInt(items[3]);
         }
      };
    });

	
		// 5. Initialize series data for line chart
        var seriesLineChart = {
            name:'Net Sale',
            data: []
          }; 

        // 5a. Navigate through months object and insert data into categories and series
        for (item in months)
        {
          option_linechart.xAxis.categories.push(item);
          seriesLineChart.data.push(parseFloat(months[item]));
        }
        option_linechart.series.push(seriesLineChart);
       

        // 6. Initialize series data for pie chart
         var seriesPieChart = {
            type: 'pie',
            name: 'Sales',
            data: []
          }; 

        // 6a. Navigate through type object and insert data series
        for (item in type)
        {
          seriesPieChart.data.push([item,parseFloat(type[item])]);
        }
        option_piechart.series.push(seriesPieChart);
     
     	// 7. Initialize series data for bar chart
        var seriesBarChart = {
            name:'Region',
            colorByPoint: true,
            data: []
          }; 

        var drilldownSeriesBarChart = {
            series: []
          };
        // 7a. Navigate through type object and insert data into categories and series
        for (item in regions)
        {
          //option_barchart.xAxis.categories.push(item);
          seriesBarChart.data.push({name: item, y:parseFloat(regions[item]), drilldown: item});
        }
        option_barchart.drilldown.series.push(drilldownSeriesBarChart);
        option_barchart.series.push(seriesBarChart);

    // 8. Finally draw the chart by creating a new "Highcharts" object, which has settings that are defined in "options"
    var chart = new Highcharts.Chart(option_piechart);
    var chart = new Highcharts.Chart(option_linechart);
    var chart = new Highcharts.Chart(option_barchart);
  });

});


});