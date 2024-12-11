Score : $500$ points

## Problem Statement

Find $\displaystyle \sum_{k=0}^{10^{100}} \left \lfloor \frac{X}{10^k} \right \rfloor$.

## Notes

$\lfloor A \rfloor$ denotes the value of $A$ truncated to an integer.

## Constraints

- $X$ is an integer.
- $1 \le X &lt; 10^{500000}$

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the answer as an integer.<br>
Here, the answer must be precisely printed as an integer, even if it is large. It is not allowed to use exponential notation, such as `2.33e+21`, or print unnecessary leading zeros, as in `0523`.

```input1
1225
```

```output1
1360
```

The value we seek is $1225+122+12+1+0+0+\dots+0=1360$.

```input2
99999
```

```output2
111105
```

Beware of carries.

```input3
314159265358979323846264338327950288419716939937510
```

```output3
349065850398865915384738153697722542688574377708317
```

The values in input and output can both be enormous.