data "aws_iam_openid_connect_provider" "this" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_iam_policy_document" "oidc" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [data.aws_iam_openid_connect_provider.this.arn]
    }

    condition {
      test     = "StringEquals"
      values   = ["sts.amazonaws.com"]
      variable = "token.actions.githubusercontent.com:aud"
    }

    condition {
      test     = "StringLike"
      values   = ["repo:${local.github_account}/${local.repo}:ref:refs/heads/main"]
      variable = "token.actions.githubusercontent.com:sub"
    }
  }
}

resource "aws_iam_role" "this" {
  name               = "github_oidc_role_${local.repo}"
  assume_role_policy = data.aws_iam_policy_document.oidc.json
}

# data "aws_iam_policy_document" "deploy" {
#   statement {
#     effect = "Allow"
#     actions = [
#       "s3:PutObject"
#     ]
#     resources = ["arn:aws:s3:::${local.bucket}/*"]
#   }
# }

# resource "aws_iam_policy" "deploy" {
#   name        = "ci-deploy-policy"
#   description = "Policy used for deployments on CI"
#   policy      = data.aws_iam_policy_document.deploy.json
# }
#
# resource "aws_iam_role_policy_attachment" "attach-deploy" {
#   role       = aws_iam_role.this.name
#   policy_arn = aws_iam_policy.deploy.arn
# }