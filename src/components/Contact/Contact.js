// Contact.js
import React, { useState, useEffect } from 'react';
import { GridContainer, Column1, Column2, Title, Separation, FormGroup, IconGroup, TextGroup, MandatoryGroup, IconSimple, RadioGroup, RadioInput, RadioLabel, FormGroupContainer, Checkbox, TextCheckbox, LabelCheckbox, MsgFormDevis, AlertMsgFormDevis, IconAlertMsg, TextGroupSelect, TextAreaFormGroup, ButtonSend, IconSimpleSend, SendFormGroup, EmailError } from './ContactStyles';

const Contact = () => {
    const [associationVisible, setAssociationVisible]=useState(false);
    const [companyVisible, setCompanyVisible]=useState(false);

return(
<form action='https://formspree.io/f/xayzrayq' method='POST'>
  <GridContainer>
    <Column1>
        <Title>Vos coordonnées</Title>
        <Separation/>
        <FormGroup>
            <IconGroup>
                <IconSimple className="fas fa-user"></IconSimple>
            </IconGroup>
            <TextGroup name='Nom / Prénom' placeholder='Nom / Prénom' autoComplete='off' required></TextGroup>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        <FormGroupContainer>
        <RadioGroup>
          <RadioInput
            type="radio"
            id="particulier"
            name="Status"
            value="Particulier"
            onClick={()=>{setAssociationVisible(false); setCompanyVisible(false)}}
            defaultChecked
          />
          <RadioLabel htmlFor="particulier">Particulier</RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <RadioInput
            type="radio"
            id="association"
            name="Status"
            value="Association"
            onClick={()=>{setAssociationVisible(true); setCompanyVisible(false)}}
          />
          <RadioLabel htmlFor="association">Association</RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <RadioInput
            type="radio"
            id="societe"
            name="Status"
            value="Société"
            onClick={()=>{setAssociationVisible(false); setCompanyVisible(true)}}
          />
          <RadioLabel htmlFor="societe">Société</RadioLabel>
        </RadioGroup>
        </FormGroupContainer>
        {associationVisible &&
        <FormGroup>
            <IconGroup>
                <IconSimple className="fa-solid fa-building"></IconSimple>
            </IconGroup>
            <TextGroup name="Nom de l'association" placeholder="Nom de l'association" autoComplete='off' required></TextGroup>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        }
        {companyVisible &&
        <FormGroup>
            <IconGroup>
                <IconSimple className="fa-solid fa-building"></IconSimple>
            </IconGroup>
            <TextGroup name="Nom de l'entreprise" placeholder="Nom de l'entreprise" autoComplete='off' required></TextGroup>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        }
        <FormGroup>
            <IconGroup>
                <IconSimple className="fa-solid fa-at"></IconSimple>
            </IconGroup>
            <TextGroup name='E-mail' placeholder='E-mail' autoComplete='off' required id='email-field'></TextGroup>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        <FormGroup>
            <IconGroup>
                <IconSimple className="fa-solid fa-phone"></IconSimple>
            </IconGroup>
            <TextGroup name='Téléphone' placeholder='Téléphone' autoComplete='off'></TextGroup>
        </FormGroup>
        <FormGroup>
            <IconGroup>
                <IconSimple className="fa-solid fa-link"></IconSimple>
            </IconGroup>
            <TextGroup name='Adresse site web (si existant)' placeholder='Adresse site web (si existant)' autoComplete='off'></TextGroup>
        </FormGroup>
        <FormGroup>
            <Checkbox>
                <input type="checkbox" id='checkboxDevis' required/>
            </Checkbox>
            <TextCheckbox>
                <LabelCheckbox for="checkboxDevis">En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler.</LabelCheckbox>
            </TextCheckbox>
        </FormGroup>
        <MsgFormDevis>
            <AlertMsgFormDevis>
                <IconAlertMsg className="fa fa-info-circle" ></IconAlertMsg>
                <b>Demande de devis gratuit.</b> Réponse moyenne sous 72h.<br/> 
                Merci de détailler au maximum votre projet pour une réponse précise.
            </AlertMsgFormDevis>								
        </MsgFormDevis>
    </Column1>
    <Column2>
        <Title>Votre projet</Title>
        <Separation/>
        <FormGroup>
            <TextGroupSelect name="Type de projet" placeholder="Type de projet" autoComplete="off" required>
                <option value="" disabled>Type de projet</option>
                <option value="Site vitrine [Standard]">Site vitrine [Standard]</option>
                <option value="Site vitrine [Personnalisé]">Site vitrine [Personnalisé]</option>
                <option value="Plateforme e-commerce">Plateforme e-commerce</option>
                <option value="Application mobile">Application mobile</option>
                <option value="Conception graphique">Conception graphique</option>
                <option value="Développement spécifique">Développement spécifique</option>
            </TextGroupSelect>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        <FormGroup>
            <TextAreaFormGroup name="Description du projet" placeholder="Description de votre projet... Merci de détailler le plus possible votre besoin afin de faciliter nos futurs échanges." autoComplete="off" required/>
            <MandatoryGroup>*</MandatoryGroup>
        </FormGroup>
        <SendFormGroup>
            <ButtonSend type='submit'>  
                <IconSimpleSend className="fa fa-paper-plane"></IconSimpleSend>
                 Envoyer ma demande de devis
			</ButtonSend>	
        </SendFormGroup>
    </Column2>
  </GridContainer>
</form>
)};

export default Contact;
