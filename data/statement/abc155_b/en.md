Score: $200$ points

## Problem Statement

You are an immigration officer in the Kingdom of AtCoder. The document carried by an immigrant has some number of integers written on it, and you need to check whether they meet certain criteria.

According to the regulation, the immigrant should be allowed entry to the kingdom if and only if the following condition is satisfied:

- All even numbers written on the document are divisible by $3$ or $5$.

If the immigrant should be allowed entry according to the regulation, output `APPROVED`; otherwise, print `DENIED`.

## Notes

- The condition in the statement can be rephrased as "If $x$ is an even number written on the document, $x$ is divisible by $3$ or $5$".
Here "[if](https://en.wikipedia.org/wiki/Material_conditional)" and "[or](https://en.wikipedia.org/wiki/Logical_disjunction)" are logical terms.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 100$
- $1 \leq A_i \leq 1000$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If the immigrant should be allowed entry according to the regulation, print `APPROVED`; otherwise, print `DENIED`.

```input1
5
6 7 9 10 31
```

```output1
APPROVED
```

The even numbers written on the document are $6$ and $10$.

All of them are divisible by $3$ or $5$, so the immigrant should be allowed entry.

```input2
3
28 27 24
```

```output2
DENIED
```

$28$ violates the condition, so the immigrant should not be allowed entry.