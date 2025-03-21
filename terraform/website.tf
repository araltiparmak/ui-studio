module "website" {
  source              = "github.com/araltiparmak/terraform-modules//static-site?ref=v1.0.1"
  domain_name         = local.bucket
  with_cloudfront     = true
  cloudfront_aliases  = ["ui.araltiparmak.com"]
  acm_certificate_arn = "arn:aws:acm:us-east-1:789798665829:certificate/e0fdbb0d-d6a5-4e64-88ba-46a39bf7d91e"
}
