document.querySelector('.Trip').addEventListener('click', perform);
function perform(e) {
//   staer date
        const startDate = new Date(document.getElementById('start').value);
        
        
        //end date
        const endDate = new Date(document.getElementById('end').value);
       
        const Difference_In_Time = endDate.getTime() - startDate.getTime(); 
        console.log(Difference_In_Time)
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log(Difference_In_Days)
        alert('length of trip:'+Difference_In_Days+'days')
  console.log('hi')
}
