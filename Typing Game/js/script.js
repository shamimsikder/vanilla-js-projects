window.addEventListener('load', init)

// Load More Words From Text File
function loadMoreWord(){

    let xml;

    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest()
    }

    else{
        xml = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xml.onReadyStateChange = function(){

        if(xml.readyState === 4 && xml.status === 200){
            let words = xml.responseText.split("\n") 
        }

    }

    xml.open("GET", "words.txt", true)
    xml.send()

}