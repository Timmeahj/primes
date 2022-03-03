const limit = 50000;
for (let i = 1; i < limit; i++) {
    let point = document.createElement('div');
    point.style.marginLeft = `${i/30}px`;
    point.style.transform = `rotate(${i/30}rad)`;
    point.style.transformOrigin = `-${i/30}px 0px`;
    stylePoint(point);
    if(isPrime(i)){
        point.style.background = 'yellow';
    }
    document.body.appendChild(point);
}

function stylePoint(point){
    point.style.background = '#0074D9';
    point.style.width = '2px';
    point.style.height = '2px';
    point.style.borderRadius = '50%';
    point.style.position = 'absolute';
    point.style.left = `${window.innerWidth/2}px`;
    point.style.top = `${window.innerHeight/2}px`;
}

function isPrime(x){
    if(x === 1) return false;
    for(let i = 2; i < Math.sqrt(x); i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}