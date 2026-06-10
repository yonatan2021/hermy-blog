# frozen_string_literal: true

# Ruby 3.4+ removed tainted? from String.
# Liquid::Variable#taint_check still calls it.
# Patch String to add it back.
class String
  def tainted?
    false
  end

  def untrusted?
    false
  end

  def trusted?
    true
  end
end
