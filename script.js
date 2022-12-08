function findDistance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }

function initMap() {
    const myLatLng = { lat: 33.21879676954057, lng: -97.12889440102987 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17.55,
        center: myLatLng,
        mapId: '8c0e554eb089e4e8',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
    });
    //format for the markers array
    //Title
    //Lat, lng
    //icon url
    //scaledSize width, height
    //information content
    const markers = [
        [
            "Crawford General Store",
            33.2192916667, -97.1296166667,
            "icons/grocery_icon.svg",
            28,
            21,
        ],
        [
            "St. James Church",
            33.220425, -97.1296166667,
            "icons/church_icon.svg",
            28,
            21,
            "asdf"
        ],
       
        [
            "Henry Taylor",
            33.2199027778, -97.1285444444,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Mr and Mrs Skinner",
            33.2206222222, -97.1276666667,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Angeline  Burr",
            33.2206416667, -97.1291416667,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Will and Ida Hill",
            33.2182805556, -97.1302666667,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Sid Woods",
            33.2209361111, -97.1280555556,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "HC Bell",
            33.2194055556, -97.1291416667,
            "icons/bell_icon.svg",
            28,
            21,
        ],
        [
            "Fred Douglass School",
            33.21915, -97.1291416667,
            "icons/school__icon.svg",
            28,
            21,
        ],
        [
            "Moten Family",
            33.2172805556, -97.130325,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Dr. Moten",
            33.217292171340574, -97.1304973672452,
            "icons/doctor_icon.svg",
            28,
            21,
        ],
        [
            "Maude Woods",
            33.22103889, -97.12859444,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "Quaker Town Historic Marker",
            33.2206149615713, -97.12944957107445,
            "icons/marker_icon.svg",
            28,
            21,
        ],
        [
            "Bombing Parairie St",
            33.21881111, -97.12987222,
            "icons/Star_icon.svg",
            28,
            21,
        ],
        [
            "Lynching Tree",
            33.22788580704731, -97.12902425750816,
            "icons/Tree_icon.svg",
            28,
            21,
        ],
        [
            "House of Ruth",
            33.217929021407805, -97.12980804289462,
            "icons/house_icon.svg",
            28,
            21,
        ],
        [
            "TWU Old Main Building",
            33.22470162363694, -97.12772397365582,
            "icons/twu_icon.svg",
            28,
            21,
        ],
        [
            "Pleasant Grove Baptist Church",
            33.2189138889, -97.1291472222,
            "icons/church_icon.svg",
            28,
            21,
        ],
        [
            "Crawford Funeral (Citizen Undertaking)",
            33.21907222, -97.12854722,
            "icons/coffin_icon.svg",
            28,
            21,
        ],
        [
            "Crime Conspiracy",
            33.217838092623495, -97.12997775551949,
            "icons/Star_icon.svg",
            28,
            21,
        ],
        [
            "Thomas Hill",
            33.21816389, -97.1302666667,
            "icons/house_icon.svg",
            28,
            21,
        ],
        
    ];

    const url = [
        "pages/01_Crawford_Store/Final Code/crawford_store.html",
        "pages/02_St_James_Church/Final code/james-church-desktop/james-church.html",
        "pages/03_Henry_Taylor/Henry Taylor Images/henry-taylor_mobile/hennry-taylor.html",
        "pages/04_Skinners/Final_Code/skinners-desktop/skinners.html",
        "pages/05_Angeline_Burr/Final Code/angeline-burr/angelina-burr.html",
        "pages/06_Will_Ida_Hill /final code /Web /Will_Ida_Hill-desktop web /will-ida-hill.html",
        "pages/07_Woods House /Final Code /Desktop code /woods-house.html",
        "pages/08_HC_Bell /Final Code /HC_Bell_Desktop /hc-bell.html",
        "pages/09_FDouglass_School /Final Code /fred-moore /douglass-school.html",
        "pages/10.2_Moten_Family /Final Code /Moten-Web /moten-family.html",
        "pages/10_Dr_Moten /Moten Images /Final_Code /Moten-Letters-Desktop /dr.moten.html",
        "pages/11_Maude_Woods_Clark_Hembry /Final Code /maude-woods.html",
        "pages/12_Historic_Marker /FINAL CODE /TWU-historical-marker-desktop /twu-historic-marker.html",
        "pages/13_Bombing_Prairie_St /Final Code /Bobming_Prairie Desktop /bombing-prairie.html",
        "pages/14_Lynching_Tree /Final Code /lynchingtree-desktop /lynching-tree.html",
        "pages/15_House_Ruth /Final Code /House_of_ruth_desktop /house-of-ruth.html",
        "pages/16_TWU_Old_Main /FINAL CODE /twu-old-main.html",
        "pages/17_Pleasant_Grove_Church /Final Code /pleasant-grove-church-desktop /pleasant-church.html",
        "pages/18_Crawford_Funeral /Final Code /Crawford-Funeral-Desktop /funeral.html",
        "pages/19_Crime_Conspiracy/Final Code/twu-old-main-desktop/crime-conspiracy.html",
        "pages/20_Hill_TWU /FINAL CODE /hill-twu-desktop /thomas-hill.html",
    ];
    
    // Function to create links for the html pages 
    function createLink(url, name)
    {
        var container = document.createElement('div');
        var a = document.createElement('a');
        var titleName = document.createElement("p");
        titleName.className = "infoWindowContent";
        var text = document.createTextNode(name);
        var link = document.createTextNode('click here');
        titleName.appendChild(text);
        a.appendChild(link);
        container.appendChild(titleName);
        container.appendChild(a);
        
        a.href = url;

        return container;
    }
    setTimeout(getLocation(),1000);
    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successFunction);
        }
    }

    function successFunction(position){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var myLoc= new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map,
            title: "Hello World!",
        });

        const distance = [];
    var mar = [];

    for(let i =0; i<markers.length;i++)
    {
        const currmarker = markers[i];
        
            const marker = new google.maps.Marker({
            position: { lat: currmarker[1], lng: currmarker[2] },
            map,
            title: currmarker[0],
            icon: {
                url: currmarker[3],
                scaledSize: new google.maps.Size(currmarker[4], currmarker[5])
            },
            animation: google.maps.Animation.DROP,
            
        });
        
        const infowindow = new google.maps.InfoWindow({
            content: createLink(url[i], marker.title), 
        });
        
        mar[i]= marker;

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });    

        var dist = findDistance(myLoc,marker);
        distance[i] = ((dist*5280));
    }

    const minDist = Math.min(...distance);
    const minDistIndex = distance.indexOf(minDist);
    
    const infowindow = new google.maps.InfoWindow({
        content: createLink(url[minDistIndex], mar[minDistIndex].title), 
    });
    infowindow.open({
        anchor: mar[minDistIndex],
        map,
        shouldFocus: false,
    });
      // *** For current location ***
      infoWindow = new google.maps.InfoWindow();

      const locationButton = document.createElement("button");
  
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {
          // HTML5 geolocation.
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
              const pos = {
                  
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              };
              
              infoWindow.setPosition(pos);
              infoWindow.setContent("Your current Location");
              infoWindow.open(map);
              map.setCenter(pos);
              },
              () => {
              handleLocationError(true, infoWindow, map.getCenter());
              }
          );
          } else {
          // If the browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
          }
      });
      }
  
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
          browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }
    
    // navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       var myLoc= new google.maps.Marker({

    //         position: { lat: position.coords.latitude, lng: position.coords.longitude },
    //         map,
    //         title: "Hello World!",
    //     });
    //     });
        

    // var myLoc= new google.maps.Marker({

    //     position: { lat: 0.00, lng: 0.00 },
    //     map,
    //     title: "Hello World!",
    // });

    
    
    
  

    
}




