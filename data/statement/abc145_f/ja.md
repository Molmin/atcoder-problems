配点 : $600$ 点

## 問題文

$10^9$ 行 $N$ 列の白色グリッドのいくつかのマスを黒く塗って、アートを製作します。<br>
現時点では、左から $i$ 列目については下から $H_i$ 個のマスを黒く塗り、その列の残りのマスは塗らない予定です。<br>
アートの製作を開始する前に、あなたは $K$ 個以下の列 ($0$ 個でもよい) を選び、それらの列に対する $H_i$ の値を $0$ 以上 $10^9$ 以下の好きな整数に変更できます。<br>
変更後の値は列ごとに個別に選べます。<br>

その後、あなたは次の操作を繰り返すことで変更後のアートを製作します。<br>

- ある行の連続する $1$ マス以上のマスを選んで黒く塗る。(すでに黒く塗られたマスを再び塗ってもよいが、塗らないことにしたマスを塗ってはならない。)

この操作を最小で何回行う必要があるか求めてください。<br>

## 制約

- $1 \leq N \leq 300$
- $0 \leq K \leq N$
- $1 \leq H_i \leq 10^9$
- 入力はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $H_1$ $H_2$ $...$ $H_N$

## 出力

必要な最小の操作回数を出力せよ。

```input1
4 1
2 3 4 1
```

```output1
3
```

例えば、$H_3$ の値を $2$ に変更した上で以下のような操作を行うと、$3$ 回の操作で変更後のアートを製作することができます。<br>

- 下から $1$ 行目の左から $1$ 列目から $4$ 列目までのマスを黒く塗る。
- 下から $2$ 行目の左から $1$ 列目から $3$ 列目までのマスを黒く塗る。
- 下から $3$ 行目の左から $2$ 列目のマスを黒く塗る。

```input2
6 2
8 6 9 1 2 1
```

```output2
7
```

```input3
10 0
1 1000000000 1 1000000000 1 1000000000 1 1000000000 1 1000000000
```

```output3
4999999996
```