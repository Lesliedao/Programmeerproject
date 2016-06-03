var loopTempSchedule = [], supplySideOutletTemperature = [], waterHeaterGasRate = [], deliFanPower = [], supplySideInletMassFlowRate = [], hvacElectricDemandPower = [], heatScheduleValue = [],
    pumpPower = [], waterHeaterTankTemperature = [], supplySideInletTemperature = [], windDirection = [], totalElectricDemandPower = [], drybulbTemperature = [], waterHeaterSetpoint = [],
    windSpeed = [], coolScheduleValue = [];

d3.json("general-MC2.json", function(error, data) {
    if (error) throw error;

    // console.log(new Date(dateFormat.parse("2016-06-01 00:00:05") - new Date().getTimezoneOffset() * 60 * 1000));
    for (var i = 0; i < data.length; i++) {
        var datetime = new Date(dateFormat.parse(data[i].message["Date/Time"]) - new Date().getTimezoneOffset() * 60 * 1000);
        var timeoffset = data[i].offset;
        loopTempSchedule.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Loop Temp Schedule"]
        });

        supplySideOutletTemperature.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Supply Side Outlet Temperature"]
        });

        waterHeaterGasRate.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Water Heater Gas Rate"]
        });

        deliFanPower.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["DELI-FAN Power"]
        });

        supplySideInletMassFlowRate.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Supply Side Inlet Mass Flow Rate"]
        });

        hvacElectricDemandPower.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["HVAC Electric Demand Power"]
        });

        heatScheduleValue.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["HEAT Schedule Value"]
        });

        pumpPower.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Pump Power"]
        });

        waterHeaterTankTemperature.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Water Heater Tank Temperature"]
        });

        supplySideInletTemperature.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Supply Side Inlet Temperature"]
        });

        windDirection.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Wind Direction"]
        });

        totalElectricDemandPower.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Total Electric Demand Power"]
        });

        drybulbTemperature.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Drybulb Temperature"]
        });

        waterHeaterSetpoint.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Water Heater Set Point"]
        });

        windSpeed.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["Wind Speed"]
        });

        coolScheduleValue.push({
            timestamp: datetime,
            offset: timeoffset,
            val: +data[i].message["COOL Schedule Value"]
        });
    }
    console.log(loopTempSchedule);
    console.log(supplySideOutletTemperature);
    console.log(waterHeaterGasRate);
    console.log(deliFanPower);
    console.log(supplySideInletMassFlowRate);
    console.log(hvacElectricDemandPower);
    console.log(heatScheduleValue);
    console.log(pumpPower);
    console.log(waterHeaterTankTemperature);
    console.log(supplySideInletTemperature);
    console.log(windDirection);
    console.log(totalElectricDemandPower);
    console.log(drybulbTemperature);
    console.log(waterHeaterSetpoint);
    console.log(windSpeed);
    console.log(coolScheduleValue);
});
