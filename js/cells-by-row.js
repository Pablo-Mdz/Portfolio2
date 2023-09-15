

( function( window ) {

'use strict';

function cellsByRowDefinition( LayoutMode ) {

  var CellsByRow = LayoutMode.create( 'cellsByRow' );

  CellsByRow.prototype._resetLayout = function() {
    
    this.itemIndex = 0;
    this.getColumnWidth();
    
    
};

CellsByRow.prototype._getItemLayoutPosition = function( item ) {
    this.getColumnWidth();
    
    
    var row = Math.floor( this.itemIndex / this.cols );
    var x = ( col + 0.5 ) * this.columnWidth - item.size.outerWidth / 2;
    var y = ( row + 0.5 ) * this.rowHeight - item.size.outerHeight / 2;
    this.itemIndex++;
    return { x: x, y: y };
  };

  CellsByRow.prototype._getContainerSize = function() {
    return {
      height: Math.ceil( this.itemIndex / this.cols ) * this.rowHeight
    };
  };

  return CellsByRow;

}

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'isotope/js/layout-mode'
    ],
    cellsByRowDefinition );
} else {
  
  cellsByRowDefinition(
    window.Isotope.LayoutMode
  );
}

})( window );
