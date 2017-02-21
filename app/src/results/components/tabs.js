import React, { Component } from 'react'
import Button from '../../components/util/button'

const styles = {
  tabGroup: {
    width: '100%'
  },
  tab: {
    width: '33.33%'
  }
}

const selectStyle = (isSelected) => (isSelected) ? {...styles.tab, backgroundColor: '#00F'} : styles.tab

export default class Tabs extends Component {
  handleSelect = (tabName) => {
    this.props.selectTab(tabName)
  }
  render() {
      const { selectedTab } = this.props
      return (
        <div style={styles.tabGroup}>
          <Button
            text='Resultat'
            customStyles={selectStyle('chart' === selectedTab)}
            handleClick={() => this.handleSelect('chart')}
          />
          <Button
            text='Kommentarer'
            customStyles={selectStyle('comments' === selectedTab)}
            handleClick={() => this.handleSelect('comments')}
          />
          <Button
            text='Mediebevakning'
            customStyles={selectStyle('media' === selectedTab)}
            handleClick={() => this.handleSelect('media')}
          />
        </div>
      )
  }
}
