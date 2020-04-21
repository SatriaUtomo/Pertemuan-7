 document.addEventListener('DOMContentLoaded', ()=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 900;
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
      
    let x = 100;
    let y = 100;

    //Aksi1
    ctx.save();
    ctx.beginPath();
    ctx.translate(300, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.translate(300, 200);
    ctx.rotate(Math.PI*16/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.restore(); 

    //Aksi2
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 500);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 500);
    ctx.rotate(Math.PI*-7/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Aksi3
    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 500);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 500);
    ctx.rotate(Math.PI*-11/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
});
