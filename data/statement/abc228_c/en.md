Score : $300$ points

## Problem Statement

$N$ students are taking a $4$-day exam.

There is a $300$-point test on each day, for a total of $1200$ points.

The first three days of the exam are already over, and the fourth day is now about to begin. The $i$-th student $(1 \leq i \leq N)$ got $P_{i, j}$ points on the $j$-th day $(1 \leq j \leq 3)$.

For each student, determine whether it is possible that he/she is ranked in the top $K$ after the fourth day.<br>
Here, the rank of a student after the fourth day is defined as the number of students whose total scores over the four days are higher than that of the student, plus $1$.

## Constraints

- $1 \leq K \leq N \leq 10^5$
- $0 \leq P_{i, j} \leq 300 \, (1 \leq i \leq N, 1 \leq j \leq 3)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_{1,1}$ $P_{1,2}$ $P_{1,3}$
> 
> $\vdots$
> 
> $P_{N,1}$ $P_{N,2}$ $P_{N,3}$

## Output

Print $N$ lines. The $i$-th line $(1 \leq i \leq N)$ should contain `Yes` if it is possible that the $i$-th student is ranked in the top $K$ after the fourth day, and `No` otherwise.

```input1
3 1
178 205 132
112 220 96
36 64 20
```

```output1
Yes
Yes
No
```

If every student scores $100$ on the fourth day, the $1$-st student will rank $1$-st.<br>
If the $2$-nd student scores $100$ and the other students score $0$ on the fourth day, the $2$-nd student will rank $1$-st.<br>
The $3$-rd student will never rank $1$-st.  

```input2
2 1
300 300 300
200 200 200
```

```output2
Yes
Yes
```

```input3
4 2
127 235 78
192 134 298
28 56 42
96 120 250
```

```output3
Yes
Yes
No
Yes
```