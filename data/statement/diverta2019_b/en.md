Score : $200$ points

## Problem Statement

Snuke has come to a store that sells boxes containing balls. The store sells the following three kinds of boxes:

- Red boxes, each containing $R$ red balls
- Green boxes, each containing $G$ green balls
- Blue boxes, each containing $B$ blue balls

Snuke wants to get a total of exactly $N$ balls by buying $r$ red boxes, $g$ green boxes and $b$ blue boxes.
How many triples of non-negative integers $(r,g,b)$ achieve this?

## Constraints

- All values in input are integers.
- $1 \leq R,G,B,N \leq 3000$

## Input

Input is given from Standard Input in the following format:

> $R$ $G$ $B$ $N$

## Output

Print the answer.

```input1
1 2 3 4
```

```output1
4
```

Four triples achieve the objective, as follows:

- $(4,0,0)$
- $(2,1,0)$
- $(1,0,1)$
- $(0,2,0)$

```input2
13 1 4 3000
```

```output2
87058
```