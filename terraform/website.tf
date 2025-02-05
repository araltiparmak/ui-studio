module "website" {
  source          = "github.com/araltiparmak/terraform-modules//static-site?ref=v1.0.1"
  domain_name     = local.bucket
  with_cloudfront = false
}
