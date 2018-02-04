import React from 'react';
import {
    withStyles, Grid
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Accessibility
} from 'material-ui-icons';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';

import {
    StatsCard, ChartCard, TasksCard, RegularCard, Table, ItemGrid
} from 'components';

import {
    dailySalesChart ,
    frequencyChart,
} from 'variables/charts';

import { dashboardStyle } from 'variables/styles';

class Dashboard extends React.Component{
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={dailySalesChart.data}
                                    type="Line"
                                    options={dailySalesChart.options}
                                    listener={
                                        dailySalesChart.animation
                                    }
                                />
                            }
                            chartColor="green"
                            title="Mood Tracker"
                            text={
                                <span>
                                    <span className={this.props.classes.successText}><ArrowUpward className={this.props.classes.upArrowCardCategory}/> 55%</span> increase in mood.
                                </span>
                            }
                            statIcon={AccessTime}
                            statText="updated 1 day ago"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={frequencyChart.data}
                                    type="Bar"
                                    options={frequencyChart.options}
                                    responsiveOptions={frequencyChart.responsiveOptions}
                                    listener={
                                        frequencyChart.animation
                                    }
                                />
                            }
                            chartColor="red"
                            title="Therapy Frequency"
                            text="Number of appointments per month"
                            statIcon={AccessTime}
                            statText="updated 2 days ago"
                        />
                    </ItemGrid>
                </Grid>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                        <TasksCard />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                        <RegularCard
                            headerColor="orange"
                            cardTitle="All Activity"
                            cardSubtitle="Your history of services"
                            content={
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={['Date', 'Activity']}
                                    tableData={[
                                        [ '2/3/2018' , "Call with Dr. Pepper"] ,
                                        [ '2/1/2018' , "You got prescription for Viagra"] , 
                                    ]}
                                />
                            }
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
