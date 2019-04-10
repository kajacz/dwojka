function drawChart()
{
    var ctx = document.getElementById("myChart");
						var myChart = new Chart(ctx, {
						type: 'bar',
						data: {
								labels: ["Księga przychodów i rozchodów", "Ryczałt", "Księgi rachunkowe", "Obsługa pracownika"],
								datasets: [{
										label: 'zł',
										data: [120, 100, 500, 30],
										backgroundColor: [
												'rgba(255, 99, 132, 0.3)',
												'rgba(54, 162, 235, 0.3)',
												'rgba(255, 206, 86, 0.3)',
												'rgba(75, 192, 192, 0.3)'
												
										],
										borderColor: [
												'rgba(255,99,132,1)',
												'rgba(54, 162, 235, 1)',
												'rgba(255, 206, 86, 1)',
												'rgba(75, 192, 192, 1)'
										],
										
										borderWidth: 1
								}],
								
						},
						options: {
								scales: {
										yAxes: [{
												ticks: {
														beginAtZero:true
												}
										}]
								}
						}
                        });
                    }