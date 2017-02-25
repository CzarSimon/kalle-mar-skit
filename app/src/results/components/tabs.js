import React, { Component } from 'react'
import Button from '../../components/util/button'

const styles = {
  tabGroup: {
    width: '100%'
  },
  smallTab: {
    width: '30%'
  },
  bigTab: {
    width: '40%'
  }
}

const selectStyle = (isSelected, style) => (isSelected) ? {...style, backgroundColor: '#00F'} : style

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
            customStyles={selectStyle('chart' === selectedTab, styles.smallTab)}
            handleClick={() => this.handleSelect('chart')}
          />
          <Button
            text='Kommentarer'
            customStyles={selectStyle('comments' === selectedTab, styles.bigTab)}
            handleClick={() => this.handleSelect('comments')}
          />
          <Button
            text='Media'
            customStyles={selectStyle('media' === selectedTab, styles.smallTab)}
            handleClick={() => this.handleSelect('media')}
          />
        </div>
      )
  }
}
