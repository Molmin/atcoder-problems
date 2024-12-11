Score : $200$ points

## Problem Statement

Takahashi will answer $N$ quiz questions.<br>
Initially, he has $X$ points. Each time he answers a question, he gains $1$ point if his answer is correct and loses $1$ point if it is incorrect.<br>
However, there is an exception: when he has $0$ points, he loses nothing for answering a question incorrectly.

You will be given a string $S$ representing whether Takahashi's answers are correct.<br>
If the $i$-th character of $S$ from the left is `o`, it means his answer for the $i$-th question is correct; if that character is `x`, it means his answer for the $i$-th question is incorrect.<br>
How many points will he have in the end?

## Constraints

- $1 \le N \le 2 \times 10^5$
- $0 \le X \le 2 \times 10^5$
- $S$ is a string of length $N$ consisting of `o` and `x`.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $S$

## Output

Print the number of points Takahashi will have in the end.

```input1
3 0
xox
```

```output1
0
```

Initially, he has $0$ points.<br>
He answers the first question incorrectly but loses nothing because he has no point.<br>
Then, he answers the second question correctly, gains $1$ point, and now has $1$ point.<br>
Finally, he answers the third question incorrectly, loses $1$ point, and now has $0$ points.<br>
Thus, he has $0$ points in the end. We should print $0$.  

```input2
20 199999
oooooooooxoooooooooo
```

```output2
200017
```

```input3
20 10
xxxxxxxxxxxxxxxxxxxx
```

```output3
0
```