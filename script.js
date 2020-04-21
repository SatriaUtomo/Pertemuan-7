 
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
    //Badan
    //Kotak
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 200);
    ctx.rotate(Math.PI*-11/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(225, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

//Aksi2
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 200);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(500, 200);
    ctx.rotate(Math.PI*-9/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();


    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(575, 250)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    
//Aksi3
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 560);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(150, 560);
    ctx.rotate(Math.PI*-7/8);        
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(225, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore(); 
    
//Aksi4
    //Badan
    //Kotak

    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 560);
    ctx.rect(0,0,150,100)
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Tangan
    //Kiri 
    ctx.save();
    ctx.beginPath();
    ctx.translate(540, 540);
    ctx.rotate(Math.PI*16/8);       
    ctx.rect(0,0,150,25)
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    //Muka
    //Mata Kiri
    ctx.save();
    ctx.beginPath();
    ctx.translate(615, 610)
    ctx.scale(1,1)
    ctx.arc(0, 0, 35, 0, Math.PI*2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
    ctx.restore();  
});
