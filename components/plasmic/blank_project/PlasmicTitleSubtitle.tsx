// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c95mFDtsQD22zpZcHK8Lci
// Component: BzXRBzu1sd
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: c95mFDtsQD22zpZcHK8Lci/projectcss
import * as sty from "./PlasmicTitleSubtitle.module.css"; // plasmic-import: BzXRBzu1sd/css

export type PlasmicTitleSubtitle__VariantMembers = {};

export type PlasmicTitleSubtitle__VariantsArgs = {};
type VariantPropType = keyof PlasmicTitleSubtitle__VariantsArgs;
export const PlasmicTitleSubtitle__VariantProps = new Array<VariantPropType>();

export type PlasmicTitleSubtitle__ArgsType = {
  farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts?: React.ReactNode;
  slot3?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTitleSubtitle__ArgsType;
export const PlasmicTitleSubtitle__ArgProps = new Array<ArgPropType>(
  "farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts",
  "slot3"
);

export type PlasmicTitleSubtitle__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTitleSubtitleProps {
  farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts?: React.ReactNode;
  slot3?: React.ReactNode;
  className?: string;
}

function PlasmicTitleSubtitle__RenderFunc(props: {
  variants: PlasmicTitleSubtitle__VariantsArgs;
  args: PlasmicTitleSubtitle__ArgsType;
  overrides: PlasmicTitleSubtitle__OverridesType;
  dataFetches?: PlasmicTitleSubtitle__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox___3MJFh)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
          value:
            args.farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts,
          className: classNames(
            sty.slotTargetFarFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts
          )
        })}
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox___8Mu0)}>
        {p.renderPlasmicSlot({
          defaultContents: "Our mission is design & develop.",
          value: args.slot3,
          className: classNames(sty.slotTargetSlot3)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTitleSubtitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTitleSubtitle__VariantsArgs;
    args?: PlasmicTitleSubtitle__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTitleSubtitle__Fetches;
  } & Omit<PlasmicTitleSubtitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTitleSubtitle__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTitleSubtitle__ArgProps,
      internalVariantPropNames: PlasmicTitleSubtitle__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTitleSubtitle__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTitleSubtitle";
  } else {
    func.displayName = `PlasmicTitleSubtitle.${nodeName}`;
  }
  return func;
}

export const PlasmicTitleSubtitle = Object.assign(
  // Top-level PlasmicTitleSubtitle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTitleSubtitle
    internalVariantProps: PlasmicTitleSubtitle__VariantProps,
    internalArgProps: PlasmicTitleSubtitle__ArgProps
  }
);

export default PlasmicTitleSubtitle;
/* prettier-ignore-end */
