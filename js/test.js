var groups = ["Cereals","Plants","Dairy","Eggs","Seafood","Meat"]

//Fake test data
var data_kcal = [ ['GHG emissions', 30, 20, 100, 200, 150, 650],
                  ['Land use', 130, 150, 200, 300, 200, 100],
                  ['Acidification potential', 300, 200, 100, 22, 150, 50],
                  ['Energy use', 100, 130, 340, 20, 150, 500],
                  ['Eutrophication potential', 130, 100, 140, 200, 150, 50]
                ]

$(function () {


    var chart = c3.generate({
         //bindto: '#chart',
         data: {
            columns: [data_kcal[0]],
            type: 'bar',
            onclick: function (d, element){
                console.log('onclick');
              },
            onmouseover: function(){
                console.log('mouseover');
            },

        },
        
        axis: {
            x: {
                type: 'category',
                categories: groups
            },
            y: {
            label: 'g CO2 equiv/kcal'
            },
        },


    });


/*    setTimeout(function () {
        chart.load({
            columns: [data_kcal[1]],
            axis: {
                y: {
                label: 'm2/kcal'
                }
            }
        });
        chart.unload({
        ids: 'GHG emissions'
        });

    }, 3000);*/
// - - - - - - - - - -    Slides    - - - - - - - - - - - - - - - - - - - - - - -  
    
    // Slides
    var slide_0 = function() {
      document.getElementById("slide_title").innerHTML = "Environmental impact of food";
      document.getElementById("slide_text").innerHTML = "Click to explore environmental impact of food";
    };

    var slide_1 = function() {
      document.getElementById("slide_title").innerHTML = "";
      document.getElementById("slide_text").innerHTML = "The carbon impact (why it matters...) GHG Emissions...";
    };

    var slide_2 = function() {
      document.getElementById("slide_text").innerHTML = "These foods are really whorst...";
      /*chart.regions([{
        axis:'x',   start: '3'
      }]);*/
    };

    var slide_3 = function() {
     /*chart.regions([]);*/
      document.getElementById("slide_text").innerHTML = "...";
    };

    var slide_4 = function() {
     /*chart.select(["Searches"], [107]);*/
      document.getElementById("slide_text").innerHTML = "boo";
    };

    var slide_5 = function() {
     /*chart.unselect();*/
     chart.load({
        columns: [data_kcal[1]],
        axis: {
            y: {
                label: 'm2/kcal'
            }
        }
    });
    chart.unload({
        ids: 'GHG emissions'
    });
      document.getElementById("slide_text").innerHTML = "Land use measures how much land is occupied during food production...";
    };

    var slide_6 = function() {
     /*chart.unselect();*/
     chart.load({
        columns: [data_kcal[2]],
        axis: {
            y: {
                label: 'Acid.units'
            }
        }
    });
    chart.unload({
        ids: 'Land use'
    });
      document.getElementById("slide_text").innerHTML = "About acidification potential...";
    };

    var slide_6 = function() {
    //Pour superposer: chart.groups([['data1', 'data2']]);
      document.getElementById("slide_text").innerHTML = "ugyug";
    };

    var slides = [slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6];


    // Cycle through slides

    var current_slide = 0;

    var run = function() {
      slides[current_slide]();
      current_slide += 1;

      if (current_slide === 1) {
        document.getElementById("slide_btn").innerHTML = "Start";
      } else if (current_slide === slides.length) {
        current_slide = 0;
        document.getElementById("slide_btn").innerHTML = "Read again";
      } else {
        document.getElementById("slide_btn").innerHTML = "Continue";
      }
    };

    // Button event handler

    document.getElementById('slide_btn').addEventListener("click", run);

    // Init

    run();


});
