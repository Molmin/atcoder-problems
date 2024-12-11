Score : $100$ points

## Problem Statement

In a certain programming contest, T-shirts are awarded to participants according to the following rules.

- All participants who ranked $A$-th or higher get a T-shirt.
- Additionally, from the participants who ranked between $(A+1)$-th and $B$-th (inclusive), $C$ participants chosen uniformly at random get a T-shirt.

There were $1000$ participants in this contest, and all of them got different ranks.<br>
Iroha-chan, who participated in this contest, ranked $X$-th.<br>
Find the probability that she gets a T-shirt.

## Constraints

- All values in input are integers.
- $1 \le A &lt; B \le 1000$
- $1 \le C \le B-A$
- $1 \le X \le 1000$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $X$

## Output

Print the answer.
Your output will be considered correct if the absolute or relative error from the judge's answer is at most $10^{ - 6}$.

```input1
30 500 20 103
```

```output1
0.042553191489
```

Iroha-chan ranked $103$-rd.<br>
She will get a T-shirt if she is among the $20$ participants chosen uniformly at random from the $470$ participants who ranked between $31$-st and $500$-th, which happens with probability $\frac{20}{470}=0.04255319\dots$.

```input2
50 500 100 1
```

```output2
1.000000000000
```

Iroha-chan ranked $1$-st. This time, she is guaranteed to get a T-shirt.

```input3
1 2 1 1000
```

```output3
0.000000000000
```

Iroha-chan ranked $1000$-th. This time, she will never get a T-shirt.