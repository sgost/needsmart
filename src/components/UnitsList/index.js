import React from 'react';
import {
  ItemPrice,
  AllUnitsList,
  AllUnitsListItem
} from './styles';

const UnitsList = ({ mainItem, changeUnit }) => {

  const onChange = (item) => {
    changeUnit(item);
  };

  return (
    <AllUnitsList>
      <AllUnitsListItem key={mainItem.item.id} onClick={() => onChange(mainItem)}>
        <span className="sizeUnit">{mainItem.item.size}{mainItem.item.unit}</span> -
        <ItemPrice className="unitPrice">
          Rs. <span className={mainItem.sp && 'lineThrough'}>{mainItem.mrp}</span> {mainItem.sp && <span className="sprice">{mainItem.sp}</span>}
        </ItemPrice>
      </AllUnitsListItem>
      {
        mainItem.all_units && mainItem.all_units.map(unit =>
          <AllUnitsListItem key={unit.item.id} onClick={() => onChange(unit)}>
            <span className="sizeUnit">{unit.item.size}{unit.item.unit}</span> -
            <ItemPrice>
              Rs. <span className={unit.sp && 'lineThrough'}>{unit.mrp}</span> {unit.sp && <span className="sprice">{unit.sp}</span>}
            </ItemPrice>
          </AllUnitsListItem>
        )
      }
    </AllUnitsList>
  );
};

export default UnitsList;
