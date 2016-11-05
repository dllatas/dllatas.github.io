import React from 'react';

const Title = (props) => <h1 className={props.titleClass} style={props.titleStyle}>{props.text}</h1>

const Subtitle = (props) => <p className={props.subtitleClass}>{props.text}</p>

const SocialLink = (props) => (
    <a target="_blank" href={props.url} style={props.SLStyle}>
        <span style={props.SLSpanStyle}>
            <img src={props.img} alt={props.alt} style={props.SLImgStyle} />
        </span>
    </a>
)

const SocialLinkList = (props) => (
    <section className={props.rowClass} >
        <section className={props.colClass} >
            {props.social.map((link, i) => {
                return <SocialLink key={i} url={link.ref} img={link.img} alt={link.alt} text={link.text}
                    SLStyle={props.SLStyle} SLSpanStyle={props.SLSpanStyle} SLImgStyle={props.SLImgStyle} />
            })}
        </section>
    </section>
)

const Header = (props) => (
    <section>
        <Title titleClass={props.titleClass} titleStyle={props.titleStyle} text={props.titleText} />
        <Subtitle subtitleClass={props.subtitleClass} text={props.subtitleText} />
        {props.misc.map((text, i) => {
            return <Subtitle key={i} subtitleClass={props.miscClass} text={text} />
        })}
        <SocialLinkList rowClass={props.rowClass} colClass={props.colClass} social={props.social}
            SLStyle={props.SLStyle} SLSpanStyle={props.SLSpanStyle} SLImgStyle={props.SLImgStyle} />
    </section>
)

export const Jumbotron = (props) => (
    <section className={props.CFClass}>
        <section className={props.JTClass} style={props.JTStyle}>
            <Header titleClass={props.titleClass} titleStyle={props.titleStyle} titleText={props.titleText}
                subtitleClass={props.subtitleClass} subtitleText={props.subtitleText}
                misc={props.misc} miscClass={props.miscClass}
                rowClass={props.rowClass} colClass={props.colClass} social={props.social}
                SLStyle={props.SLStyle} SLSpanStyle={props.SLSpanStyle} SLImgStyle={props.SLImgStyle} />
        </section>
    </section>
)