Score : $200$ points

## Problem Statement

Given an integer $X$ between $-10^{18}$ and $10^{18}$ (inclusive), print $\left\lfloor \dfrac{X}{10} \right\rfloor$.

## Notes

For a real number $x$, $\left\lfloor x \right\rfloor$ denotes "the maximum integer not exceeding $x$".  For example, we have $\left\lfloor 4.7 \right\rfloor = 4, \left\lfloor -2.4 \right\rfloor = -3$, and $\left\lfloor 5 \right\rfloor = 5$.  (For more details, please refer to the description in the Sample Input and Output.)

## Constraints

- $-10^{18} \leq X \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print $\left\lfloor \frac{X}{10} \right\rfloor$.  Note that it should be output as an integer.

```input1
47
```

```output1
4
```

The integers that do not exceed $\frac{47}{10} = 4.7$ are all the negative integers, $0, 1, 2, 3$, and $4$.  The maximum integer among them is $4$, so we have $\left\lfloor \frac{47}{10} \right\rfloor = 4$.

```input2
-24
```

```output2
-3
```

Since the maximum integer not exceeding $\frac{-24}{10} = -2.4$ is $-3$, we have $\left\lfloor \frac{-24}{10} \right\rfloor = -3$.<br>
Note that $-2$ does not satisfy the condition, as $-2$ exceeds $-2.4$.

```input3
50
```

```output3
5
```

The maximum integer that does not exceed $\frac{50}{10} = 5$ is $5$ itself.  Thus, we have $\left\lfloor \frac{50}{10} \right\rfloor = 5$.

```input4
-30
```

```output4
-3
```

Just like the previous example, $\left\lfloor \frac{-30}{10} \right\rfloor = -3$.

```input5
987654321987654321
```

```output5
98765432198765432
```

The answer is $98765432198765432$.  Make sure that all the digits match.

If your program does not behave as intended, we recommend you checking the specification of the programming language you use.<br>
If you want to check how your code works, you may use "Custom Test" above the Problem Statement.