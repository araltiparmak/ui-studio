terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.84.0"
    }
  }
  backend "s3" {
    bucket = "my-infra"
    key    = "synapse.tfstate"
    region = "eu-central-1"
  }
  required_version = ">= 1.10.4"
}

provider "aws" {
  region = "eu-central-1"
  default_tags {
    tags = {
      ManagedBy = "Terraform"
      Repo      = local.repo
    }
  }
}

locals {
  github_account = "araltiparmak"
  repo           = "ui-forge-ai-studio"
  bucket         = "ui-forge-ai-studio"
}
