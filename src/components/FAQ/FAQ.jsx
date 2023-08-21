import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../Header/Header";

const FAQ = () => {
    return (
        <>
            < Header title="FAQ" text="Frequently Asked Questions Page" />
            <div className="faqContainer">
                <Accordion defaultExpanded >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="faqIcon" />} >
                        <p >
                            An Important Question
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="faqIcon" />}>
                        <p >
                            Another Important Question
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="faqIcon" />}>
                        <p >
                            Your Favorite Question
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="faqIcon" />}>
                        <p >
                            Some Random Question
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className="faqIcon" />}>
                        <p >
                            The Final Question
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
};

export default FAQ