Score : $150$ points

## Problem Statement

A real number $X$ is given to the third decimal place.

Print the real number $X$ under the following conditions.

- The decimal part must not have trailing `0`s.
- There must not be an unnecessary trailing decimal point.

## Constraints

- $0 \le X &lt; 100$
- $X$ is given to the third decimal place.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Output the answer.

```input1
1.012
```

```output1
1.012
```

`1.012` can be printed as it is.

```input2
12.340
```

```output2
12.34
```

Printing `12.340` without the trailing `0` results in `12.34`.

```input3
99.900
```

```output3
99.9
```

Printing `99.900` without the trailing `0`s results in `99.9`.

```input4
0.000
```

```output4
0
```

Printing `0.000` without trailing `0`s or an unnecessary decimal point results in `0`.