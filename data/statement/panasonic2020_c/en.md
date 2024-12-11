Score : $300$ points

## Problem Statement

Does $\sqrt{a} + \sqrt{b} &lt; \sqrt{c}$ hold?

## Constraints

- $1 \leq a, b, c \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a \ b \ c$

## Output

If $\sqrt{a} + \sqrt{b} &lt; \sqrt{c}$, print `Yes`; otherwise, print `No`.

```input1
2 3 9
```

```output1
No
```

$\sqrt{2} + \sqrt{3} &lt; \sqrt{9}$ does not hold.

```input2
2 3 10
```

```output2
Yes
```

$\sqrt{2} + \sqrt{3} &lt; \sqrt{10}$ holds.