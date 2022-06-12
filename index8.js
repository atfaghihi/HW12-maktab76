const script = document.createElement('script');

script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');

script.onload = function scriptLoaded() {
    console.log('script has loaded');
    console.log(this.src);
};

document.head.appendChild(script);
