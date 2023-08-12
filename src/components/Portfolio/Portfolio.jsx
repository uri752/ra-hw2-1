import { Toolbar } from './../Toolbar/Toolbar';
import { ProjectList } from './../ProjectList/ProjectList'
import { projectListData } from './../../projectListData.js'

import  React, { Component } from 'react';
import { useState } from 'react';

export class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: ["All", "Websites", "Flayers", "Business Cards"],
            selected: 'All',        
            items: projectListData,
            currentItems:[]
        }
        this.state.currentItems = this.state.items;
        this.choseCategory = this.choseCategory.bind(this);
    }

    render() {
        return (
        <div className='container'>
        <Toolbar 
            filters={this.state.arr}
            selected={this.state.selected}
            onSelectFilter={this.choseCategory}/>
        
        <ProjectList items={this.state.currentItems}/>
        </div>
        )
    }

    choseCategory (category) {        
        if(category === 'All') {           
            this.setState({
                selected: category,
                currentItems: this.state.items
            });
            return;
        }
        this.setState({
            selected: category,
            currentItems: this.state.items.filter( el => el.category === category )
        });
    }
}
