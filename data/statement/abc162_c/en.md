Score : $300$ points

## Problem Statement

Find $\displaystyle{\sum_{a=1}^{K}\sum_{b=1}^{K}\sum_{c=1}^{K} \gcd(a,b,c)}$.

Here $\gcd(a,b,c)$ denotes the greatest common divisor of $a$, $b$, and $c$.

## Constraints

- $1 \leq K \leq 200$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $K$

## Output

Print the value of $\displaystyle{\sum_{a=1}^{K}\sum_{b=1}^{K}\sum_{c=1}^{K} \gcd(a,b,c)}$.

```input1
2
```

```output1
9
```

$\gcd(1,1,1)+\gcd(1,1,2)+\gcd(1,2,1)+\gcd(1,2,2)$
$+\gcd(2,1,1)+\gcd(2,1,2)+\gcd(2,2,1)+\gcd(2,2,2)$
$=1+1+1+1+1+1+1+2=9$

Thus, the answer is $9$.

```input2
200
```

```output2
10813692
```