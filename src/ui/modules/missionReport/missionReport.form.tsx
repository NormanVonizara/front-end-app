import {FormsType} from "@/types/forms";
import {useMultiStepForm} from "@/hooks/useMultiStepForm";
import {InformationMissionReport} from "@/ui/components/forms/InformationMissionReport";
import {ObjectivesMissionReport} from "@/ui/components/forms/ObjectivesMissionReport";
import {ProgressOfActivitiesMissionReport} from "@/ui/components/forms/ProgressMissionReport";
import {ResultMissionReport} from "@/ui/components/forms/ResultMissionReport";
import {RecommandationsMissionReport} from "@/ui/components/forms/RecommandationsMissionReport";
import {NextStepMissionReport} from "@/ui/components/forms/NextStepMissionReport";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {Button} from "@/ui/design-system/button/button";
import {VscGitPullRequest} from "react-icons/vsc";
import {Steps, StepTypography} from "@/ui/design-system/step/steps";
import {Step} from "@/types/step";
import {v4 as uuidv4} from "uuid";

interface Props {
    form: FormsType
}

export const MissionReportForm = ({form}: Props) => {
    const {step, steps, currentStepIndex, back, next} = useMultiStepForm([<InformationMissionReport key={uuidv4()} form={form} />, <ObjectivesMissionReport key={uuidv4()} form={form} />, <ProgressOfActivitiesMissionReport key={uuidv4()} form={form} />, <ResultMissionReport key={uuidv4()} form={form} />, <RecommandationsMissionReport key={uuidv4()} form={form} />, <NextStepMissionReport key={uuidv4()} form={form} />])
    const {
        handleSubmit,
        onSubmit,
        isLoading
    } = form;
    const stepsItems: Step[] = [
        {name: "Informations de la Mission", number: 1},
        {name: "Objectifs de la mission", number: 2},
        {name: "Déroulements des activités", number: 3},
        {name: "Résultats", number: 4},
        {name: "Récommendations", number: 5},
        {name: "Prochaines étapes", number: 6}
    ]
    return (
        <>
            <div className="lg:hidden">
                <StepTypography name={stepsItems[currentStepIndex].name} number={stepsItems[currentStepIndex].number}/>
            </div>
            <div className="grid grid-cols-6 gap-2">
                <Steps currentStepIndex={currentStepIndex + 1} steps={stepsItems}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
                {step}
                <div className="flex justify-between">
                    {currentStepIndex !== 0 &&
					    <button
						    type="button"
						    className="bg-primary hover:bg-primary-500 text-white rounded-full flex items-center justify-center w-[40px] h-[40px] transition-all text-2xl"
						    onClick={back}
						    disabled={isLoading}
					    >
						    <GrFormPreviousLink/>
					    </button>
                    }
                    {currentStepIndex !== steps.length - 1 ?
                        <button
                            type="button"
                            className="bg-primary hover:bg-primary-500 text-white rounded-full flex items-center justify-center w-[40px] h-[40px] transition-all text-2xl"
                            onClick={next}
                            disabled={isLoading}
                        >
                            <GrFormNextLink/>
                        </button>
                        :
                        <Button
                            isLoading={isLoading}
                            type="submit"
                            icon={{icon: VscGitPullRequest}}
                            iconPosition="left"
                        >
                            Soumettre la validation
                        </Button>
                    }
                </div>
            </form>
        </>
    )
}