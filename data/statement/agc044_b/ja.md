配点 : $700$ 点

## 問題文

映画「ジョーカー」が今夜放映されるとあり、あなたの行きつけの劇場はすでに満席です。この劇場には $N$ 席の座席からなる列が $N$ 列あり、これらの席が $N\times N$ の正方形型に並んでいます。最前列の観客に左から $1, 2,\dots, N$ の番号を、前から $2$ 列目の観客に左から $N+1, \dots, 2N$ の番号を付け、以降の観客にも同様に番号を付けます。最後列の観客の番号は、左から $N^2-N+1,\dots, N^2$ となります。

上映が終わると、観客は決まった順に劇場を出ます。$i$ 番目に劇場を出るのは、番号 $P_i$ の観客です。番号 $P_{i+1}$ の観客は、番号 $P_{i}$ の観客が劇場を出るまで待ってから移動します。劇場を出るには、席から席への移動を繰り返し、席からなる正方形型のエリアの外に出なければなりません (四辺のどこからでも出ることができます)。席から席への移動では、前後左右の $4$ 方向への移動が可能です。

番号 $x$ の観客が、劇場を出る際に番号 $y$ の別の観客が **まだ座っている** 席を通り抜けてしまうと、番号 $x$ の観客は番号 $y$ の観客に永遠に嫌われます。各観客は、自分を永遠に嫌う観客の数が最小となるように移動方法を選びます。

番号 $x$ の観客が番号 $y$ の観客に永遠に嫌われるような組 $(x, y)$ の個数を求めてください。

## 制約

- $2 \le N \le 500$
- 列 $P_1, P_2, \dots, P_{N^2}$ は $\{1, 2, \dots, N^2\}$ の順列である。

## 入力

入力は標準入力から以下の形式で与えられる。

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_{N^2}$

## 出力

問題文で述べたような観客の組 $(x, y)$ が $ans$ 組存在するとして、標準出力に以下の形式で出力せよ。

> $ans$

```input1
3
1 3 7 9 5 4 8 6 2
```

```output1
1
```

上映が終わる前の劇場内の観客の配置は以下の通りです。

```output1
1 2 3
4 5 6
7 8 9
```

劇場を出る最初の $4$ 人 (番号 $1$, $3$, $7$, $9$ の観客) は席を通り抜けることなく劇場を出られるので、誰にも嫌われません。

その後、番号 $5$ の観客は、劇場を出る際に番号 $2$, $4$, $6$, $8$ の観客が座る席のうちいずれかを通り抜けなければなりません。よって、番号 $5$ の観客は上記の観客のうち少なくとも一人に嫌われます。

最後に残った $4$ 人 (順に番号 $4$, $8$, $6$, $2$ の観客) は、人が座っている席を通り抜けずに劇場を出られます (そもそも、席を通り抜ける必要がありません)。

```input2
4
6 7 1 4 13 16 10 9 5 11 12 14 15 2 3 8
```

```output2
3
```

```input3
6
11 21 35 22 7 36 27 34 8 20 15 13 16 1 24 3 2 17 26 9 18 32 31 23 19 14 4 25 10 29 28 33 12 6 5 30
```

```output3
11
```