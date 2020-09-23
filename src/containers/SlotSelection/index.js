import React, { Fragment, useEffect, useState } from 'react';
import { Tabs, Radio, Button } from 'antd';
import { getSlots } from "../../utils/services/slotAPI";
import {
  SlotContainer,
  ProceedBtn
} from './styles';

const SlotSelection = props => {

  const { TabPane } = Tabs;

  const[slots, setSlots] = useState({});

  useEffect(() => {
    getSlots(
      success => {
        setSlots(success.data);
      }
    );
  }, []);

  const[slotValue, setSlotValue] = useState('');

  const[slotDetails, setSlotDetails] = useState({});

  const getTimeSlot = (e, slot, timingDetails) => {
    let slotObj = timingDetails.find((itmInner) => itmInner.id === e.target.value);
    if(slotObj) {
      setSlotDetails(slotObj);
    }
    setSlotValue(e.target.value);
  };

  const proceed = () => {
    props.slot(slotDetails);
  };

  return (
    <SlotContainer>
      {
        Object.keys(slots).length !== 0 &&
        <Tabs className="slotTabs">
          {
            Object.keys(slots).map(slot => {
              const timingDetails = slots[slot];
              return (
                <Fragment key={slot}>
                  {
                    timingDetails.length > 0 &&
                    <TabPane tab={slot} key={slot}>
                      <Radio.Group className="radioBtnGrp" value={slotValue} onChange={(e) => getTimeSlot(e, slot, timingDetails)} buttonStyle="solid">
                        {
                          Object.keys(timingDetails).map((key) => {
                          const time = timingDetails[key];
                            return (
                              <Radio.Button value={time.id} key={time.id} disabled={!time.available}>
                                {time.start_time} - {time.end_time}
                              </Radio.Button>
                            )
                          })
                        }
                      </Radio.Group>
                    </TabPane>
                  }
                </Fragment>
              )
            })
          }
        </Tabs>
      }
      {
        slotValue &&
        <ProceedBtn>
          <Button type="primary" onClick={proceed}>Proceed to Payment</Button>
        </ProceedBtn>
      }
    </SlotContainer>
  );
};

export default SlotSelection;
