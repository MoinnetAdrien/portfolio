// ContactStyles.js
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background-color: white;
  padding: 10px;
  border: 2px solid #f5f5f5;
  margin: 0 2px 20px;
  padding: 20px 0 0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr
  }
`;

export const Column1 = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;

  input[type='text'],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom: 12px;
  }

  input[type='submit'] {
    background-color: #04aa6d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }
`;

export const Column2 = styled.div`
    background-color: white;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    width: 100%;
`;

export const Title = styled.h5`
    color: #222;
    font: 16px/18px "Poppins","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
`;

export const Separation = styled.hr`
    margin: 10px 0;
    border: 0;
    border-top: 1px solid #eee;
`;

export const FormGroup = styled.div`
    position: relative;
    display: table;
    border-collapse: separate;
    margin-bottom: 15px;
    height:40px;
`;

export const IconGroup = styled.span`
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: 0;
    border: 1px solid #eee;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    width: 1%;
    vertical-align: middle;
    display: table-cell;
    box-sizing: border-box;
`;

export const IconSimple = styled.i`
    left: 0 !important;
    top: 0 !important;
    font-size: 14px !important;
    position: inherit !important;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    color: #555;
    text-align: center;
`;

export const TextGroup = styled.input`
    box-shadow: none;
    height: 40px;
    resize: none;
    color: black;
    padding: 6px 16px;
    background: none;
    display: table-cell;
    width: 100%;
    border: 1px solid #eee;
    vertical-align: middle;
    font-size: 14px;
    line-height: 1.428571429;
`;

export const MandatoryGroup = styled.span`
border-left: 0;
border-bottom-left-radius: 0;
border-top-left-radius: 0;
border-radius: 0;
border: 1px solid #eee;
padding: 6px 12px;
font-size: 14px;
font-weight: normal;
line-height: 1;
color: #555;
text-align: center;
background-color: #eee;
width: 1%;
    vertical-align: middle;
    display: table-cell;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
`;

export const FormGroupContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    position: relative;
    border-collapse: separate;
    height:40px;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    width: 18px;
    height: 18px;
    background: url(grey.png) no-repeat;
    border: none;
    cursor: pointer;
    background-position: -140px 0;
    position: relative;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const RadioLabel = styled.label`
    color: #8f8f8f !important;;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold !important;
    font-size: 14px;
    padding: 12px 12px 12px 0;
    display: block;
    text-align: left;
`;

export const Checkbox = styled.div`
    margin: 0 auto!important;
    padding: 0!important;
    width: 8.333333333333332%;
    float: left;
`;

export const TextCheckbox = styled.div`
    margin: 0 auto!important;
    padding: 0!important;
    width: 91.66666666666666%;
    float: left;
`;

export const LabelCheckbox = styled.label`
    font-size: 14px;
    line-height: 13px;
    margin: 0 0 0 10px;
    position: relative;
    top: 2px;
    font-weight: normal;
    min-height: 45px;
    display: inline-block;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
    color: #333 !important;
`;

export const MsgFormDevis = styled.div`
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333;
    display: block;
`;

export const AlertMsgFormDevis = styled.p`
    padding: 5px 15px;
    line-height: 18px;
    font-size: 13px;
    margin: 0 0 29px;
    border-radius: 0px;
    color: #3a87ad;
    background-color: #d9edf7;
    border-color: #bce8f1;
    border: 1px solid transparent;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export const IconAlertMsg = styled.i`
    font-size: 35px !important;
    left: 0 !important;
    top: 0 !important;
    position: inherit !important;
    float: left;
    margin: 0 20px 40px 0;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
`;

export const TextGroupSelect = styled.select`
    box-shadow: none;
    height: 40px;
    resize: none;
    color: black;
    padding: 6px 16px;
    background: none;
    display: table-cell;
    width: 100%;
    border: 1px solid #eee;
    vertical-align: middle;
    font-size: 14px;
    line-height: 1.428571429;
`;

export const TextAreaFormGroup = styled.textarea`
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    height: 290px !important;
    margin: 0px !important;
    box-shadow: none;
    border-radius: 0;
    resize: none;
    color: black;
    padding: 6px 16px;
    background: none;
    display: table-cell;
    width: 100%;
    font-size: 14px;
    border-color: #eee;
`;

export const ButtonSend = styled.button`
    margin-top: 7px;
    background: #2dbda1;
    color: white;
    margin: 0 0 33px !important;
    border-color: #2a2a2a;
    padding: 12px 20px;
    text-transform: uppercase;
    border: 1px solid ;
    border-radius: 0;
    text-align: center;
    white-space: normal;
    vertical-align: top;
    letter-spacing: 2px;
    font: 11px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
    text-align: right;
    transition: all .4s ease;
    cursor: pointer;

    &:hover {
        background-color: black;
    }
      
`;

export const IconSimpleSend = styled.i`
    left: 0 !important;
    top: 0 !important;
    font-size: 14px !important;
    position: inherit !important;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    color: white;
    text-align: center;
    border: none;
    margin-right:12px;
`;

export const SendFormGroup = styled.div`
    position: relative;
    display: block;
    border-collapse: separate;
    margin-bottom: 15px;
    height:40px;
    text-align: right !important;
`;

export const EmailError = styled.span`
    color:red;
`;

