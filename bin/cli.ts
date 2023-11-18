#!/usr/bin/env node

import { Command } from "commander";
import pjson from "../package.json";

const program = new Command();

program.version(pjson.version);
