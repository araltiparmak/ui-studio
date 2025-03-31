module "oidc" {
  source         = "github.com/araltiparmak/terraform-modules//github-oidc?ref=v1.1.0"
  github_account = local.github_account
  repo           = local.repo
}
