# frozen_string_literal: true

# Ensure Liquid is loaded first
require 'liquid'

# Ruby 3.4+ removed String#tainted?. Liquid::Variable#taint_check calls it.
# Monkey-patch to make it a no-op.
module Liquid
  class Variable
    def taint_check(_obj)
      # Ruby 3.4+ removed tainted?. taint_check is a no-op now.
    end
  end
end
